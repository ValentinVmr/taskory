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

  /** Remonte la chaîne carriedFromId pour trouver l'ID de la tâche racine. */
  private _getRootTaskId(taskId: string): string {
    let current = this.storage.getTask(taskId);
    const visited = new Set<string>();
    while (current?.carriedFromId && !visited.has(current.id)) {
      visited.add(current.id);
      const parent = this.storage.getTask(current.carriedFromId);
      if (!parent) break;
      current = parent;
    }
    return current?.id ?? taskId;
  }

  /**
   * Synchronise les carry-overs : trouve les tâches incomplètes du dernier jour
   * précédent et les ajoute à la page courante si elles n'y sont pas déjà.
   * Utilise l'ID racine pour éviter les doublons même en cas de chaînes multi-jours.
   */
  private _syncCarryOvers(date: string): void {
    const page = this.storage.getPage(date)!;

    // Purge des doublons éventuellement déjà stockés (même ID racine → garder le premier)
    const seenRootIds = new Set<string>();
    const dedupedTaskIds: string[] = [];
    for (const id of page.taskIds) {
      const task = this.storage.getTask(id);
      if (!task) continue;
      const rootId = this._getRootTaskId(id);
      if (seenRootIds.has(rootId)) {
        this.storage.deleteTask(id); // supprime le doublon
      } else {
        seenRootIds.add(rootId);
        dedupedTaskIds.push(id);
      }
    }
    if (dedupedTaskIds.length !== page.taskIds.length) {
      page.taskIds = dedupedTaskIds;
      this.storage.savePage(page);
    }

    const lastPage = this._findLastPageBefore(date);
    if (!lastPage) return;

    // IDs racines déjà représentés dans cette page
    const alreadyCarriedRootIds = new Set(
      page.taskIds
        .map(id => this.storage.getTask(id))
        .filter((t): t is Task => !!t)
        .map(t => this._getRootTaskId(t.id))
    );

    const incompleteTasks = lastPage.taskIds
      .map(id => this.storage.getTask(id))
      .filter((t): t is Task => !!t && t.state !== TaskState.DONE);

    let changed = false;
    incompleteTasks.forEach((originalTask, index) => {
      const rootId = this._getRootTaskId(originalTask.id);
      if (alreadyCarriedRootIds.has(rootId)) return; // déjà représentée (même chaîne)

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
    if (task.state === TaskState.DONE) {
      // Supprimer les copies reportées si la tâche est terminée
      this._deleteDownstreamCopies(task.id);
    } else {
      // Propager le changement d'état aux copies reportées
      this._propagateStateToDownstreamCopies(task);
    }
    this._tasks.update(ts => ts.map(t => (t.id === task.id ? task : t)));
  }

  /**
   * Propage récursivement le changement d'état aux copies reportées (carriedFromId).
   */
  private _propagateStateToDownstreamCopies(task: Task): void {
    const allTasks = Object.values(this.storage.getData().tasks);
    const copies = allTasks.filter(t => t.carriedFromId === task.id);
    copies.forEach(copy => {
      const updatedCopy: Task = { ...copy, state: task.state, endDate: task.endDate };
      this.storage.saveTask(updatedCopy);
      this._propagateStateToDownstreamCopies(updatedCopy);
    });
  }

  /**
   * Supprime récursivement toutes les copies reportées (carriedFromId) d'une tâche.
   * Cela garantit que si on change l'état de la tâche originale, les copies des jours
   * suivants sont supprimées (elles seront recréées si nécessaire au prochain loadDay).
   */
  private _deleteDownstreamCopies(taskId: string): void {
    const allTasks = Object.values(this.storage.getData().tasks);
    const copies = allTasks.filter(t => t.carriedFromId === taskId);
    copies.forEach(copy => {
      this._deleteDownstreamCopies(copy.id); // récursif en profondeur d'abord
      this.storage.deleteTask(copy.id);
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

