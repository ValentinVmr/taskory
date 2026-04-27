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
      <div class="actions-bar" *ngIf="!isNonWorkingDay()">
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
      <div class="stats-bar" *ngIf="!isNonWorkingDay()">
        <span class="stat todo">📌 {{ countTodo() }} à faire</span>
        <span class="stat in-progress">🔄 {{ countInProgress() }} en cours</span>
        <span class="stat done">✅ {{ countDone() }} terminées</span>
      </div>

      <!-- Task List -->
      <app-task-list
        *ngIf="!isNonWorkingDay(); else restDay"
        [tasks]="taskService.tasks()"
        (taskUpdated)="onTaskUpdated($event)"
        (taskDeleted)="onTaskDeleted($event)"
        (taskEdit)="openEditTask($event)"
        (reordered)="onReordered($event)"
      />

      <!-- Jour non ouvré -->
      <ng-template #restDay>
        <div class="rest-day">
          <div class="palm-scene">
            <div class="palm-tree">
              <div class="palm-trunk"></div>
              <div class="palm-leaves">
                <div class="leaf leaf-1">🌴</div>
              </div>
            </div>
            <div class="sun">☀️</div>
            <div class="wave wave-1">🌊</div>
            <div class="wave wave-2">🌊</div>
          </div>
          <h2 class="rest-title">{{ restMessage() }}</h2>
          <p class="rest-sub">Profitez-en, vous le méritez ! 🍹</p>
          <button mat-stroked-button class="force-btn" (click)="forceWorkMode()">
            <mat-icon>work</mat-icon>
            J'insiste, je travaille aujourd'hui
          </button>
        </div>
      </ng-template>
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

    /* Jour non ouvré */
    .rest-day {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px 24px;
      text-align: center;
      gap: 16px;
    }

    .palm-scene {
      position: relative;
      width: 200px;
      height: 160px;
      margin-bottom: 8px;
    }

    .sun {
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 2.5rem;
      animation: spin-slow 8s linear infinite;
    }

    .palm-tree {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }

    .palm-trunk {
      width: 14px;
      height: 80px;
      background: linear-gradient(to right, #a0704a, #c8935a);
      margin: 0 auto;
      border-radius: 4px;
      transform-origin: bottom center;
      animation: sway 3s ease-in-out infinite;
    }

    .palm-leaves {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      transform-origin: bottom center;
      animation: sway 3s ease-in-out infinite;
    }

    .leaf { font-size: 3.5rem; line-height: 1; }

    .wave {
      position: absolute;
      bottom: 0;
      font-size: 2rem;
    }
    .wave-1 { left: 0; animation: wave 2.5s ease-in-out infinite; }
    .wave-2 { right: 0; animation: wave 2.5s ease-in-out infinite 1.25s; }

    @keyframes sway {
      0%, 100% { transform: translateX(-50%) rotate(-5deg); }
      50%       { transform: translateX(-50%) rotate(5deg); }
    }

    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-6px); }
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    .rest-title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: #e65100;
    }

    .rest-sub {
      margin: 0;
      color: #888;
      font-size: 1rem;
    }

    .force-btn {
      border-color: #bdbdbd !important;
      color: #757575 !important;
      font-size: 0.8rem;
      margin-top: 8px;
    }
  `],
})
export class JournalComponent {
  taskService = inject(TaskService);
  private aiSummaryService = inject(AiSummaryService);
  private storageService = inject(StorageService);
  private dialog = inject(MatDialog);

  loadingAi = signal(false);
  private _forceWork = signal(false);

  private readonly REST_MESSAGES = [
    "C'est le week-end, lâchez le clavier ! 🏖️",
    "Repos obligatoire — les bugs peuvent attendre ! 🛌",
    "Aujourd'hui, votre seule mission : ne rien faire. 🌴",
    "Ferme Taskory. Ouvre le frigo. 🍕",
    "Mode vacances activé automatiquement. 🌞",
    "Aucune tâche n'est prévue... sauf profiter. 🎉",
    "Connexion refusée : jour de repos détecté. 🚫💻",
  ];

  isNonWorkingDay(): boolean {
    if (this._forceWork()) return false;
    const date = new Date(this.taskService.currentDate() + 'T12:00:00');
    const workingDays = this.storageService.getWorkingDaysConfig();
    return !workingDays.includes(date.getDay());
  }

  restMessage(): string {
    const date = this.taskService.currentDate();
    // Message déterministe selon la date
    const idx = date.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % this.REST_MESSAGES.length;
    return this.REST_MESSAGES[idx];
  }

  forceWorkMode(): void {
    this._forceWork.set(true);
  }

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
    this._forceWork.set(false);
    this.taskService.loadDay(d.toISOString().slice(0, 10));
  }

  nextDay() {
    const d = new Date(this.taskService.currentDate() + 'T12:00:00');
    d.setDate(d.getDate() + 1);
    this._forceWork.set(false);
    this.taskService.loadDay(d.toISOString().slice(0, 10));
  }

  goToToday() {
    this._forceWork.set(false);
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

