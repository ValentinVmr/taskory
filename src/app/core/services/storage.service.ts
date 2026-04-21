import { Injectable } from '@angular/core';
import { AppStorage, JournalPage, LlmConfig, Task } from '../models/task.model';

const STORAGE_KEY = 'todo-plus-data';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private data: AppStorage = { tasks: {}, pages: {} };

  constructor() {
    this.load();
  }

  private load(): void {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      this.data = JSON.parse(raw);
    }
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  getData(): AppStorage {
    return this.data;
  }

  getTask(id: string): Task | undefined {
    return this.data.tasks[id];
  }

  saveTask(task: Task): void {
    this.data.tasks[task.id] = task;
    this.save();
  }

  deleteTask(id: string): void {
    delete this.data.tasks[id];
    for (const page of Object.values(this.data.pages)) {
      page.taskIds = page.taskIds.filter(tid => tid !== id);
    }
    this.save();
  }

  /**
   * Supprime une tâche ET toute sa chaîne de carry-over (originale + toutes les copies).
   * Remonte à la racine via carriedFromId, puis supprime tous les nœuds de la chaîne.
   */
  deleteTaskChain(id: string): void {
    // Trouver la racine de la chaîne
    const rootId = this._findRootId(id);

    // Collecter tous les IDs de la chaîne (racine + toutes les copies qui en dérivent)
    const chainIds = this._collectChain(rootId);

    // Supprimer chaque tâche de la chaîne
    chainIds.forEach(tid => {
      delete this.data.tasks[tid];
      for (const page of Object.values(this.data.pages)) {
        page.taskIds = page.taskIds.filter(pid => pid !== tid);
      }
    });

    this.save();
  }

  private _findRootId(id: string): string {
    const task = this.data.tasks[id];
    if (!task?.carriedFromId) return id;
    return this._findRootId(task.carriedFromId);
  }

  private _collectChain(rootId: string): string[] {
    const ids: string[] = [rootId];
    for (const task of Object.values(this.data.tasks)) {
      if (task.carriedFromId === rootId) {
        ids.push(...this._collectChain(task.id));
      }
    }
    return ids;
  }

  getPage(date: string): JournalPage | undefined {
    return this.data.pages[date];
  }

  savePage(page: JournalPage): void {
    this.data.pages[page.date] = page;
    this.save();
  }

  getLlmConfig(): LlmConfig | undefined {
    return this.data.llmConfig;
  }

  setLlmConfig(config: LlmConfig): void {
    this.data.llmConfig = config;
    this.save();
  }

  exportData(): string {
    return JSON.stringify(this.data, null, 2);
  }
}

