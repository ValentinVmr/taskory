import { Injectable, signal, computed } from '@angular/core';
import { Task, TaskState, JournalPage } from '../models/task.model';
import { StorageService } from './storage.service';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

const STATE_ORDER: Record<TaskState, number> = {
  [TaskState.IN_PROGRESS]: 0,
  [TaskState.TODO]: 1,
  [TaskState.DONE]: 2,
};

@Injectable({ providedIn: 'root' })
export class TaskService {
  private _currentDate = signal<string>(formatDate(new Date()));
  currentDate = this._currentDate.asReadonly();

  private _tasks = signal<Task[]>([]);
  private _aiSummary = signal<string>('');

  tasks = computed(() => {
    const ts = [...this._tasks()];
    ts.sort((a, b) => {
      const stateDiff = STATE_ORDER[a.state] - STATE_ORDER[b.state];
      if (stateDiff !== 0) return stateDiff;
      return a.order - b.order;
    });
    return ts;
  });

  aiSummary = this._aiSummary.asReadonly();

  constructor(private storage: StorageService) {
    this.loadDay(this._currentDate());
  }

  loadDay(date: string): void {
    this._currentDate.set(date);
    if (!this.storage.getPage(date)) {
      this._createPage(date);
    }
    this._syncCarryOvers(date);
    const page = this.storage.getPage(date)!;
    const tasks = page.taskIds
      .map(id => this.storage.getTask(id))
      .filter((t): t is Task => !!t);
    this._tasks.set(tasks);
    this._aiSummary.set(page.aiSummary || '');
  }

  private _createPage(date: string): void {
    this.storage.savePage({ date, taskIds: [] });
  }

  /**
   * Synchronise les carry-overs : trouve les tâches incomplètes du dernier jour
   * précédent et les ajoute à la page courante si elles n'y sont pas déjà.
   * Utilise carriedFromId pour éviter les doublons.
   */
  private _syncCarryOvers(date: string): void {
    const page = this.storage.getPage(date)!;
    const lastPage = this._findLastPageBefore(date);
    if (!lastPage) return;

    // IDs déjà portés dans cette page (via carriedFromId)
    const alreadyCarriedFromIds = new Set(
      page.taskIds
        .map(id => this.storage.getTask(id))
        .filter((t): t is Task => !!t)
        .map(t => t.carriedFromId)
        .filter((id): id is string => !!id)
    );

    const incompleteTasks = lastPage.taskIds
      .map(id => this.storage.getTask(id))
      .filter((t): t is Task => !!t && t.state !== TaskState.DONE);

    let changed = false;
    incompleteTasks.forEach((originalTask, index) => {
      if (alreadyCarriedFromIds.has(originalTask.id)) return; // déjà reportée

      const carriedTask: Task = {
        ...originalTask,
        id: generateId(),
        carriedOver: true,
        carriedFromId: originalTask.id,
        order: page.taskIds.length + index,
      };
      this.storage.saveTask(carriedTask);
      page.taskIds.push(carriedTask.id);
      changed = true;
    });

    if (changed) this.storage.savePage(page);
  }

  /** Retourne la page la plus récente strictement antérieure à `date` (max 60 jours en arrière) */
  private _findLastPageBefore(date: string): JournalPage | undefined {
    const d = new Date(date + 'T12:00:00');
    for (let i = 1; i <= 60; i++) {
      d.setDate(d.getDate() - 1);
      const page = this.storage.getPage(formatDate(d));
      if (page && page.taskIds.length > 0) return page;
    }
    return undefined;
  }

  addTask(data: Partial<Task>): void {
    const date = this._currentDate();
    const page = this.storage.getPage(date)!;
    const task: Task = {
      id: generateId(),
      description: data.description || '',
      state: TaskState.TODO,
      startDate: date,       // date de création automatique
      endDate: '',           // vide jusqu'au passage en DONE
      ticketNumber: data.ticketNumber,
      order: page.taskIds.length,
      originDate: date,
      carriedOver: false,
    };
    this.storage.saveTask(task);
    page.taskIds.push(task.id);
    this.storage.savePage(page);
    this._tasks.update(ts => [...ts, task]);
  }

  updateTask(task: Task): void {
    this.storage.saveTask(task);
    // Propager le nouvel état à toutes les copies reportées dans la chaîne
    this._propagateStateToChain(task);
    this._tasks.update(ts => ts.map(t => (t.id === task.id ? task : t)));
  }

  /**
   * Propage l'état (et endDate) d'une tâche à toutes ses copies reportées (carriedFromId).
   * Cela garantit que si on passe la tâche originale en DONE, les copies des jours suivants
   * reflètent aussi ce changement.
   */
  private _propagateStateToChain(updatedTask: Task): void {
    const allTasks = Object.values(this.storage.getData().tasks);
    const copies = allTasks.filter(t => t.carriedFromId === updatedTask.id);
    copies.forEach(copy => {
      const updatedCopy: Task = { ...copy, state: updatedTask.state, endDate: updatedTask.endDate };
      this.storage.saveTask(updatedCopy);
      // Propager récursivement si la copie a elle-même des copies
      this._propagateStateToChain(updatedCopy);
    });
  }

  deleteTask(id: string): void {
    this.storage.deleteTaskChain(id);
    // Rafraîchir la liste du jour courant
    const page = this.storage.getPage(this._currentDate())!;
    const tasks = page.taskIds
      .map(tid => this.storage.getTask(tid))
      .filter((t): t is Task => !!t);
    this._tasks.set(tasks);
  }

  deleteAllTasks(): void {
    const date = this._currentDate();
    const page = this.storage.getPage(date)!;
    page.taskIds.forEach(id => this.storage.deleteTask(id));
    page.taskIds = [];
    this.storage.savePage(page);
    this._tasks.set([]);
  }

  cycleState(task: Task): void {
    const next: Record<TaskState, TaskState> = {
      [TaskState.TODO]: TaskState.IN_PROGRESS,
      [TaskState.IN_PROGRESS]: TaskState.DONE,
      [TaskState.DONE]: TaskState.TODO,
    };
    const nextState = next[task.state];
    const endDate = nextState === TaskState.DONE ? formatDate(new Date()) : '';

    // Calcul de l'ordre dans le nouveau groupe
    const currentTasks = this._tasks();
    let newOrder: number;
    if (nextState === TaskState.DONE) {
      // Arriver en PREMIER du groupe DONE
      const doneOrders = currentTasks.filter(t => t.state === TaskState.DONE && t.id !== task.id).map(t => t.order);
      newOrder = doneOrders.length > 0 ? Math.min(...doneOrders) - 1 : 0;
    } else if (nextState === TaskState.IN_PROGRESS) {
      // Arriver en DERNIER du groupe IN_PROGRESS
      const ipOrders = currentTasks.filter(t => t.state === TaskState.IN_PROGRESS && t.id !== task.id).map(t => t.order);
      newOrder = ipOrders.length > 0 ? Math.max(...ipOrders) + 1 : 0;
    } else {
      // Retour en TODO : arriver en dernière position du groupe TODO
      const todoOrders = currentTasks.filter(t => t.state === TaskState.TODO && t.id !== task.id).map(t => t.order);
      newOrder = todoOrders.length > 0 ? Math.max(...todoOrders) + 1 : 0;
    }

    this.updateTask({ ...task, state: nextState, endDate, order: newOrder });
  }

  reorder(tasks: Task[]): void {
    const reordered = tasks.map((t, i) => ({ ...t, order: i }));
    reordered.forEach(t => this.storage.saveTask(t));
    this._tasks.set(reordered);
  }

  saveAiSummary(summary: string): void {
    const date = this._currentDate();
    const page = this.storage.getPage(date)!;
    page.aiSummary = summary;
    this.storage.savePage(page);
    this._aiSummary.set(summary);
  }

  getPreviousDayTasks(): Task[] {
    const date = this._currentDate();
    const prev = new Date(date);
    prev.setDate(prev.getDate() - 1);
    const prevPage = this.storage.getPage(formatDate(prev));
    if (!prevPage) return [];
    return prevPage.taskIds
      .map(id => this.storage.getTask(id))
      .filter((t): t is Task => !!t);
  }
}

