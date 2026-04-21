import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TaskService } from '../../core/services/task.service';
import { AiSummaryService } from '../../core/services/ai-summary.service';
import { StorageService } from '../../core/services/storage.service';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { TaskFormComponent } from '../tasks/task-form/task-form.component';
import { Task } from '../../core/models/task.model';
import { ConfirmAllDeleteDialogComponent } from './confirm-all-delete-dialog.component';
import { SettingsDialogComponent } from './settings-dialog.component';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    TaskListComponent,
  ],
  template: `
    <div class="journal-container">
      <!-- Header / Navigation -->
      <header class="journal-header">
        <button mat-icon-button (click)="prevDay()" aria-label="Jour précédent">
          <mat-icon>chevron_left</mat-icon>
        </button>

        <div class="date-display">
          <h1 class="date-title">{{ formattedDate() }}</h1>
          <span class="date-subtitle" *ngIf="isToday()">Aujourd'hui</span>
          <span class="date-subtitle past" *ngIf="isPast()">Jour passé</span>
          <span class="date-subtitle future" *ngIf="isFuture()">Jour futur</span>
        </div>

        <button mat-icon-button (click)="nextDay()" aria-label="Jour suivant">
          <mat-icon>chevron_right</mat-icon>
        </button>

        <button mat-icon-button (click)="goToToday()" aria-label="Aujourd'hui" [disabled]="isToday()" class="today-btn">
          <mat-icon>today</mat-icon>
        </button>
      </header>

      <!-- AI Summary Banner -->
      <div class="ai-summary-banner" *ngIf="taskService.aiSummary()">
        <div class="ai-summary-header">
          <mat-icon class="ai-icon">auto_awesome</mat-icon>
          <span>{{ aiEnabled() ? 'Résumé IA' : 'Résumé' }} — journée précédente</span>
          <button mat-icon-button (click)="generateAiSummary()" [disabled]="loadingAi()" matTooltip="Régénérer" class="close-btn">
            <mat-icon>refresh</mat-icon>
          </button>
          <button mat-icon-button (click)="clearSummary()" matTooltip="Fermer">
            <mat-icon>close</mat-icon>
          </button>
        </div>
        <pre class="ai-summary-text">{{ taskService.aiSummary() }}</pre>
      </div>

      <!-- Actions Bar -->
      <div class="actions-bar">
        <button mat-raised-button color="primary" (click)="openAddTask()">
          <mat-icon>add</mat-icon>
          Nouvelle tâche
        </button>

        <button
          mat-stroked-button
          class="ai-btn"
          (click)="generateAiSummary()"
          [disabled]="loadingAi()"
        >
          <mat-icon>{{ loadingAi() ? 'hourglass_empty' : 'auto_awesome' }}</mat-icon>
          {{ loadingAi() ? 'Génération...' : (aiEnabled() ? 'Résumé IA (J-1)' : 'Résumé local (J-1)') }}
        </button>

        <button mat-stroked-button color="warn" class="delete-all-btn"
          (click)="deleteAll()"
          [disabled]="taskService.tasks().length === 0">
          <mat-icon>delete_sweep</mat-icon>
          Tout supprimer
        </button>

        <button mat-icon-button (click)="openSettings()" aria-label="Paramètres">
          <mat-icon>settings</mat-icon>
        </button>
      </div>

      <!-- Stats Bar -->
      <div class="stats-bar">
        <span class="stat todo">📌 {{ countTodo() }} à faire</span>
        <span class="stat in-progress">🔄 {{ countInProgress() }} en cours</span>
        <span class="stat done">✅ {{ countDone() }} terminées</span>
      </div>

      <!-- Task List -->
      <app-task-list
        [tasks]="taskService.tasks()"
        (taskUpdated)="onTaskUpdated($event)"
        (taskDeleted)="onTaskDeleted($event)"
        (taskEdit)="openEditTask($event)"
        (reordered)="onReordered($event)"
      />
    </div>
  `,
  styles: [`
    .journal-container {
      max-width: 720px;
      margin: 0 auto;
      padding: 16px;
      min-height: 100vh;
    }

    .journal-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }

    .date-display {
      flex: 1;
      text-align: center;
    }

    .date-title {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--mat-sys-primary);
      text-transform: capitalize;
    }

    .date-subtitle {
      font-size: 0.8rem;
      color: #888;
      display: block;
    }

    .date-subtitle.past { color: #e57373; }
    .date-subtitle.future { color: #64b5f6; }

    .today-btn { margin-left: auto; }

    .ai-summary-banner {
      background: linear-gradient(135deg, #667eea22, #764ba222);
      border: 1px solid #667eea55;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .ai-summary-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: #667eea;
      margin-bottom: 8px;
    }

    .ai-icon { color: #764ba2; }

    .close-btn { margin-left: auto; }

    .ai-summary-text {
      margin: 0;
      font-family: inherit;
      font-size: 0.9rem;
      white-space: pre-wrap;
      line-height: 1.6;
    }

    .actions-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }

    .ai-btn {
      border-color: #764ba2 !important;
      color: #764ba2 !important;
    }

    .delete-all-btn {
      margin-left: auto;
    }

    .stats-bar {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      font-size: 0.85rem;
      flex-wrap: wrap;
    }

    .stat {
      padding: 4px 12px;
      border-radius: 20px;
      font-weight: 500;
    }

    .stat.todo { background: #f5f5f5; }
    .stat.in-progress { background: #fff8e1; }
    .stat.done { background: #e8f5e9; }
  `],
})
export class JournalComponent {
  taskService = inject(TaskService);
  private aiSummaryService = inject(AiSummaryService);
  private storageService = inject(StorageService);
  private dialog = inject(MatDialog);

  loadingAi = signal(false);

  aiEnabled() {
    return this.storageService.getLlmConfig()?.enabled ?? false;
  }

  formattedDate() {
    const date = new Date(this.taskService.currentDate() + 'T12:00:00');
    return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  isToday() {
    return this.taskService.currentDate() === new Date().toISOString().slice(0, 10);
  }

  isPast() {
    return this.taskService.currentDate() < new Date().toISOString().slice(0, 10);
  }

  isFuture() {
    return this.taskService.currentDate() > new Date().toISOString().slice(0, 10);
  }

  prevDay() {
    const d = new Date(this.taskService.currentDate() + 'T12:00:00');
    d.setDate(d.getDate() - 1);
    this.taskService.loadDay(d.toISOString().slice(0, 10));
  }

  nextDay() {
    const d = new Date(this.taskService.currentDate() + 'T12:00:00');
    d.setDate(d.getDate() + 1);
    this.taskService.loadDay(d.toISOString().slice(0, 10));
  }

  goToToday() {
    this.taskService.loadDay(new Date().toISOString().slice(0, 10));
  }

  countTodo() {
    return this.taskService.tasks().filter(t => t.state === 'TODO').length;
  }
  countInProgress() {
    return this.taskService.tasks().filter(t => t.state === 'IN_PROGRESS').length;
  }
  countDone() {
    return this.taskService.tasks().filter(t => t.state === 'DONE').length;
  }

  async generateAiSummary() {
    const prevTasks = this.taskService.getPreviousDayTasks();
    if (prevTasks.length === 0) {
      this.taskService.saveAiSummary('Aucune tâche enregistrée pour la journée précédente.');
      return;
    }
    this.loadingAi.set(true);
    const summary = await this.aiSummaryService.generateSummary(prevTasks);
    this.taskService.saveAiSummary(summary);
    this.loadingAi.set(false);
  }

  clearSummary() {
    this.taskService.saveAiSummary('');
  }

  openAddTask() {
    const ref = this.dialog.open(TaskFormComponent, {
      width: '520px',
      data: { date: this.taskService.currentDate() },
    });
    ref.afterClosed().subscribe(result => {
      if (result) this.taskService.addTask(result);
    });
  }

  openEditTask(task: Task) {
    const ref = this.dialog.open(TaskFormComponent, {
      width: '520px',
      data: { task, date: this.taskService.currentDate() },
    });
    ref.afterClosed().subscribe(result => {
      if (result) this.taskService.updateTask({ ...task, ...result });
    });
  }

  openSettings() {
    this.dialog.open(SettingsDialogComponent, { width: '500px' });
  }

  deleteAll() {
    const count = this.taskService.tasks().length;
    const ref = this.dialog.open(ConfirmAllDeleteDialogComponent, {
      width: '380px',
      data: { count },
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) this.taskService.deleteAllTasks();
    });
  }

  onTaskUpdated(task: Task) {
    this.taskService.updateTask(task);
  }

  onTaskDeleted(id: string) {
    this.taskService.deleteTask(id);
  }

  onReordered(tasks: Task[]) {
    this.taskService.reorder(tasks);
  }
}

