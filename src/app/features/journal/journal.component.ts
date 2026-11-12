import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TaskService } from '../../core/services/task.service';
import { AiSummaryService } from '../../core/services/ai-summary.service';
import { StorageService } from '../../core/services/storage.service';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { TaskFormComponent } from '../tasks/task-form/task-form.component';
import { Task } from '../../core/models/task.model';
import { ConfirmAllDeleteDialogComponent } from './confirm-all-delete-dialog.component';
import { SettingsDialogComponent } from './settings-dialog.component';
import { SearchDialogComponent } from './search-dialog.component';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule, TaskListComponent],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss',
})
export class JournalComponent {
  taskService = inject(TaskService);
  private aiSummaryService = inject(AiSummaryService);
  private storageService = inject(StorageService);
  private dialog = inject(MatDialog);

  loadingAi = signal(false);
  private forceWork = signal(false);
  private settingsRevision = signal(0);
  shortcutsPanelOpen = signal(false);

  private readonly restMessages = [
    'Le repos fait aussi partie du programme.',
    'Prenez le temps de faire une pause.',
    "Aujourd'hui, avancez à votre propre rythme.",
    'Une journée pour souffler et se ressourcer.',
    'Les tâches peuvent attendre un peu.',
  ];

  toggleShortcutsPanel(): void {
    this.shortcutsPanelOpen.update((open) => !open);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.shortcutsPanelOpen() && !target.closest('.shortcuts-wrap')) {
      this.shortcutsPanelOpen.set(false);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.shortcutsPanelOpen()) {
      this.shortcutsPanelOpen.set(false);
      return;
    }

    if (this.dialog.openDialogs.length > 0) return;

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.openSearch();
      return;
    }

    const target = event.target as HTMLElement | null;
    if (
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      target?.isContentEditable ||
      target?.closest('input, textarea, select, [role="combobox"]')
    )
      return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prevDay();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextDay();
        break;
      case 't':
      case 'T':
        if (!this.isToday()) this.goToToday();
        break;
      case 'n':
      case 'N':
        if (!this.isNonWorkingDay()) this.openAddTask();
        break;
    }
  }

  isNonWorkingDay(): boolean {
    this.settingsRevision();
    if (this.forceWork()) return false;
    const date = new Date(this.taskService.currentDate() + 'T12:00:00');
    return !this.storageService.getWorkingDaysConfig().includes(date.getDay());
  }

  restMessage(): string {
    const date = this.taskService.currentDate();
    const index = date.split('').reduce((sum, character) => sum + character.charCodeAt(0), 0);
    return this.restMessages[index % this.restMessages.length];
  }

  forceWorkMode(): void {
    this.forceWork.set(true);
  }

  aiEnabled(): boolean {
    this.settingsRevision();
    const config = this.storageService.getLlmConfig();
    return !!(config?.enabled && config.apiKey);
  }

  formattedDate(): string {
    const date = new Date(this.taskService.currentDate() + 'T12:00:00');
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  isToday(): boolean {
    return this.taskService.currentDate() === new Date().toISOString().slice(0, 10);
  }

  isPast(): boolean {
    return this.taskService.currentDate() < new Date().toISOString().slice(0, 10);
  }

  prevDay(): void {
    const date = new Date(this.taskService.currentDate() + 'T12:00:00');
    date.setDate(date.getDate() - 1);
    this.forceWork.set(false);
    this.clearSummary();
    this.taskService.loadDay(date.toISOString().slice(0, 10));
  }

  nextDay(): void {
    const date = new Date(this.taskService.currentDate() + 'T12:00:00');
    date.setDate(date.getDate() + 1);
    this.forceWork.set(false);
    this.clearSummary();
    this.taskService.loadDay(date.toISOString().slice(0, 10));
  }

  goToToday(): void {
    this.forceWork.set(false);
    this.clearSummary();
    this.taskService.loadDay(new Date().toISOString().slice(0, 10));
  }

  countTodo(): number {
    return this.taskService.tasks().filter((task) => task.state === 'TODO').length;
  }

  countInProgress(): number {
    return this.taskService.tasks().filter((task) => task.state === 'IN_PROGRESS').length;
  }

  countDone(): number {
    return this.taskService.tasks().filter((task) => task.state === 'DONE').length;
  }

  countCancelled(): number {
    return this.taskService.tasks().filter((task) => task.state === 'CANCELLED').length;
  }

  countActive(): number {
    return this.taskService.tasks().length - this.countCancelled();
  }

  completionPercentage(): number {
    return this.countActive() ? Math.round((this.countDone() / this.countActive()) * 100) : 0;
  }

  async generateAiSummary(): Promise<void> {
    const date = this.taskService.currentDate();
    const previousTasks = this.taskService.getPreviousDayTasks();
    if (previousTasks.length === 0) {
      this.taskService.saveAiSummary('Aucune tâche enregistrée pour la journée précédente.');
      return;
    }

    this.loadingAi.set(true);
    try {
      const summary = await this.aiSummaryService.generateSummary(previousTasks);
      if (this.taskService.currentDate() === date) {
        this.taskService.saveAiSummary(summary);
      }
    } finally {
      this.loadingAi.set(false);
    }
  }

  clearSummary(): void {
    this.taskService.saveAiSummary('');
  }

  openAddTask(): void {
    const ref = this.dialog.open(TaskFormComponent, {
      width: '520px',
      maxWidth: 'calc(100vw - 32px)',
      autoFocus: '#task-description',
      data: { date: this.taskService.currentDate() },
    });
    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.addTask(result);
        if (result.createAnother) this.openAddTask();
      }
    });
  }

  openSearch(): void {
    const ref = this.dialog.open(SearchDialogComponent, {
      width: '600px',
      maxWidth: 'calc(100vw - 32px)',
      autoFocus: '#task-search',
    });
    ref.afterClosed().subscribe((task: Task | undefined) => {
      if (task) {
        this.taskService.loadDay(task.startDate);
        this.forceWork.set(false);
        if (this.isNonWorkingDay()) this.forceWork.set(true);
        this.clearSummary();
      }
    });
  }

  openEditTask(task: Task): void {
    const ref = this.dialog.open(TaskFormComponent, {
      width: '520px',
      maxWidth: 'calc(100vw - 32px)',
      autoFocus: '#task-description',
      data: { task, date: this.taskService.currentDate() },
    });
    ref.afterClosed().subscribe((result) => {
      if (result) this.taskService.updateTask({ ...task, ...result });
    });
  }

  openSettings(): void {
    const ref = this.dialog.open(SettingsDialogComponent, {
      width: '560px',
      maxWidth: 'calc(100vw - 32px)',
    });
    ref.afterClosed().subscribe((saved) => {
      if (saved) this.settingsRevision.update((revision) => revision + 1);
    });
  }

  deleteAll(): void {
    const ref = this.dialog.open(ConfirmAllDeleteDialogComponent, {
      width: '420px',
      maxWidth: 'calc(100vw - 32px)',
      data: { count: this.taskService.tasks().length },
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed) this.taskService.deleteAllTasks();
    });
  }

  onTaskUpdated(task: Task): void {
    this.taskService.updateTask(task);
  }

  onTaskDeleted(id: string): void {
    this.taskService.deleteTask(id);
  }

  onReordered(tasks: Task[]): void {
    this.taskService.reorder(tasks);
  }
}
