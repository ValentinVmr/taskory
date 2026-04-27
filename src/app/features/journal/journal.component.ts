import { Component, inject, signal, HostListener, OnDestroy } from '@angular/core';
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
        <button mat-icon-button (click)="prevDay()" aria-label="Jour précédent" matTooltip="Jour précédent (←)">
          <mat-icon>chevron_left</mat-icon>
        </button>

        <div class="date-display">
          <h1 class="date-title">{{ formattedDate() }}</h1>
          <span class="date-subtitle" *ngIf="isToday()">Aujourd'hui</span>
          <span class="date-subtitle past" *ngIf="isPast()">Jour passé</span>
          <span class="date-subtitle future" *ngIf="isFuture()">Jour futur</span>
        </div>

        <button mat-icon-button (click)="nextDay()" aria-label="Jour suivant" matTooltip="Jour suivant (→)">
          <mat-icon>chevron_right</mat-icon>
        </button>

        <button mat-icon-button (click)="goToToday()" aria-label="Aujourd'hui" [disabled]="isToday()" class="today-btn" matTooltip="Aujourd'hui (T)">
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

        <button mat-stroked-button class="ai-btn" (click)="generateAiSummary()" [disabled]="loadingAi()">
          <mat-icon>{{ loadingAi() ? 'hourglass_empty' : 'auto_awesome' }}</mat-icon>
          {{ loadingAi() ? 'Génération...' : (aiEnabled() ? 'Résumé IA (J-1)' : 'Résumé local (J-1)') }}
        </button>

        <button mat-stroked-button color="warn" class="delete-all-btn" (click)="deleteAll()" [disabled]="taskService.tasks().length === 0">
          <mat-icon>delete_sweep</mat-icon>
          Tout supprimer
        </button>

        <button mat-icon-button (click)="openSettings()" aria-label="Paramètres" matTooltip="Paramètres">
          <mat-icon>settings</mat-icon>
        </button>

        <!-- Shortcuts button -->
        <div class="shortcuts-wrap">
          <button mat-icon-button
            class="shortcuts-btn"
            aria-label="Raccourcis clavier"
            matTooltip="Raccourcis clavier"
            (click)="toggleShortcutsPanel()">
            <mat-icon>keyboard</mat-icon>
          </button>
          <div class="shortcuts-panel" *ngIf="shortcutsPanelOpen()">
            <div class="sp-title">
              <mat-icon class="sp-title-icon">keyboard</mat-icon>
              Raccourcis clavier
            </div>
            <div class="sp-row"><span class="sp-keys"><kbd>←</kbd></span><span class="sp-desc">Jour précédent</span></div>
            <div class="sp-row"><span class="sp-keys"><kbd>→</kbd></span><span class="sp-desc">Jour suivant</span></div>
            <div class="sp-row"><span class="sp-keys"><kbd>T</kbd></span><span class="sp-desc">Revenir à aujourd'hui</span></div>
            <div class="sp-row"><span class="sp-keys"><kbd>N</kbd></span><span class="sp-desc">Nouvelle tâche</span></div>
          </div>
        </div>
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
          <!-- Scène palmier SVG -->
          <div class="beach-scene">
            <!-- Ciel + soleil -->
            <div class="sky">
              <div class="sun-wrap">
                <div class="sun"></div>
              </div>
              <div class="cloud cloud-1"></div>
              <div class="cloud cloud-2"></div>
            </div>
            <!-- Mer -->
            <div class="sea"></div>
            <!-- Sable -->
            <div class="sand">
              <!-- Palmier SVG -->
              <svg class="palm-svg" viewBox="0 0 120 170" xmlns="http://www.w3.org/2000/svg">
                <!-- Tout le palmier pivote ensemble depuis la base du tronc -->
                <g class="palm-group">
                  <!-- Tronc -->
                  <path d="M58 155 Q52 120 56 90 Q58 60 60 20" stroke="#8d6e45" stroke-width="10"
                    stroke-linecap="round" fill="none"/>
                  <!-- Noix de coco -->
                  <circle cx="60" cy="26" r="5" fill="#5d4037"/>
                  <circle cx="53" cy="22" r="4.5" fill="#6d4c41"/>
                  <!-- Feuilles avec animation secondaire relative au groupe -->
                  <path class="leaf leaf-1" d="M60 20 Q30 5 5 18" stroke="#388e3c" stroke-width="4" stroke-linecap="round" fill="none"/>
                  <path class="leaf leaf-1" d="M60 20 Q38 8 22 22" stroke="#43a047" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
                  <path class="leaf leaf-2" d="M60 20 Q90 5 115 18" stroke="#388e3c" stroke-width="4" stroke-linecap="round" fill="none"/>
                  <path class="leaf leaf-2" d="M60 20 Q82 8 98 22" stroke="#43a047" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.7"/>
                  <path class="leaf leaf-3" d="M60 20 Q55 -5 42 -15" stroke="#2e7d32" stroke-width="4" stroke-linecap="round" fill="none"/>
                  <path class="leaf leaf-4" d="M60 24 Q28 28 10 50" stroke="#388e3c" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                  <path class="leaf leaf-5" d="M60 24 Q92 28 110 50" stroke="#388e3c" stroke-width="3.5" stroke-linecap="round" fill="none"/>
                </g>
              </svg>
            </div>
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

    /* ── Header ── */
    .journal-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }

    .date-display { flex: 1; text-align: center; }

    .date-title {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--mat-sys-primary);
      text-transform: capitalize;
    }

    .date-subtitle { font-size: 0.8rem; color: #888; display: block; }
    .date-subtitle.past { color: #e57373; }
    .date-subtitle.future { color: #64b5f6; }
    .today-btn { margin-left: auto; }

    /* ── AI summary ── */
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

    /* ── Actions / Stats ── */
    .actions-bar {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }
    .ai-btn { border-color: #764ba2 !important; color: #764ba2 !important; }
    .delete-all-btn { margin-left: auto; }

    .stats-bar {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      font-size: 0.85rem;
      flex-wrap: wrap;
    }
    .stat { padding: 4px 12px; border-radius: 20px; font-weight: 500; }
    .stat.todo { background: #f5f5f5; }
    .stat.in-progress { background: #fff8e1; }
    .stat.done { background: #e8f5e9; }

    /* ── Rest day ── */
    .rest-day {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px 24px;
      text-align: center;
      gap: 20px;
    }

    /* Beach scene */
    .beach-scene {
      width: 320px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 8px 32px rgba(0,0,0,0.12);
      position: relative;
    }

    /* Sky */
    .sky {
      height: 140px;
      background: linear-gradient(180deg, #42a5f5 0%, #81d4fa 60%, #e1f5fe 100%);
      position: relative;
      overflow: hidden;
    }

    /* Sun */
    .sun-wrap {
      position: absolute;
      top: 22px;
      right: 44px;
    }
    .sun {
      width: 44px;
      height: 44px;
      background: radial-gradient(circle at 40% 40%, #fff9c4, #ffca28 50%, #ffa000);
      border-radius: 50%;
      box-shadow: 0 0 0 8px #ffca2840, 0 0 0 18px #ffca2820;
      animation: pulse-sun 4s ease-in-out infinite;
    }
    .sun-ray {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 36px;
      height: 3px;
      margin-top: -1.5px;
      background: linear-gradient(to right, #ffca28aa, transparent);
      transform-origin: left center;
      border-radius: 2px;
      animation: spin-rays 12s linear infinite;
    }

    /* Clouds */
    .cloud {
      position: absolute;
      background: #ffffffcc;
      border-radius: 50px;
    }
    .cloud::before, .cloud::after {
      content: '';
      position: absolute;
      background: inherit;
      border-radius: 50%;
    }
    .cloud-1 {
      width: 70px; height: 22px;
      top: 28px; left: 24px;
      animation: drift 18s linear infinite;
    }
    .cloud-1::before { width: 36px; height: 32px; top: -16px; left: 10px; }
    .cloud-1::after  { width: 24px; height: 24px; top: -10px; left: 34px; }

    .cloud-2 {
      width: 50px; height: 16px;
      top: 60px; left: 180px;
      animation: drift 24s linear infinite reverse;
      opacity: 0.7;
    }
    .cloud-2::before { width: 28px; height: 24px; top: -12px; left: 8px; }
    .cloud-2::after  { width: 18px; height: 18px; top: -8px;  left: 26px; }

    /* Sea */
    .sea {
      height: 60px;
      background: linear-gradient(180deg, #29b6f6 0%, #0288d1 100%);
      position: relative;
      overflow: hidden;
    }
    @keyframes drift {
    .sand {
      height: 100px;
      background: linear-gradient(180deg, #ffe082 0%, #ffca28 100%);
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding-left: 40px;
    }

    /* Palm SVG */
    .palm-svg {
      width: 120px;
      height: 170px;
      position: absolute;
      bottom: 50px;
      left: 60px;
    }

    /* Tout le palmier pivote depuis la base du tronc */
    .palm-group {
      animation: sway-palm 3.5s ease-in-out infinite;
      transform-origin: 58px 155px;
    }

    /* Les feuilles ont un léger mouvement secondaire autour du sommet du tronc */
    .leaf-1 { animation: sway-leaf   2.8s ease-in-out infinite 0.1s; transform-origin: 60px 20px; }
    .leaf-2 { animation: sway-leaf-r 2.8s ease-in-out infinite 0.2s; transform-origin: 60px 20px; }
    .leaf-3 { animation: sway-leaf   3.1s ease-in-out infinite 0s;   transform-origin: 60px 20px; }
    .leaf-4 { animation: sway-leaf   3.3s ease-in-out infinite 0.3s; transform-origin: 60px 24px; }
    .leaf-5 { animation: sway-leaf-r 3.3s ease-in-out infinite 0.15s;transform-origin: 60px 24px; }

    /* Animations */
    @keyframes pulse-sun {
      0%, 100% { box-shadow: 0 0 0 8px #ffca2840, 0 0 0 18px #ffca2820; }
      50%       { box-shadow: 0 0 0 14px #ffca2840, 0 0 0 28px #ffca2818; }
    }
    @keyframes drift {
      from { transform: translateX(-80px); }
      to   { transform: translateX(360px); }
    }
    /* Balancement principal du palmier entier */
    @keyframes sway-palm {
      0%, 100% { transform: rotate(-5deg); }
      50%       { transform: rotate(5deg); }
    }
    /* Balancement secondaire des feuilles (amplitude plus faible) */
    @keyframes sway-leaf {
      0%, 100% { transform: rotate(-4deg); }
      50%       { transform: rotate(3deg); }
    }
    @keyframes sway-leaf-r {
      0%, 100% { transform: rotate(4deg); }
      50%       { transform: rotate(-3deg); }
    }

    .rest-title {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 700;
      color: #e65100;
    }
    .rest-sub { margin: 0; color: #888; font-size: 1rem; }
    .force-btn {
      border-color: #bdbdbd !important;
      color: #757575 !important;
      font-size: 0.8rem;
    }

    /* ── Shortcuts panel ── */
    .shortcuts-wrap {
      position: relative;
      display: inline-block;
    }
    .shortcuts-btn {
      padding: 0;
      min-width: 0;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f3f4f6;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      transition: background 0.3s;
    }
    .shortcuts-btn:hover {
      background: #e5e7eb;
    }

    .shortcuts-panel {
      position: absolute;
      top: 50px;
      right: 0;
      width: 220px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 100;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .sp-title {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
    }
    .sp-title-icon {
      font-size: 18px;
      color: #667eea;
    }
    .sp-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      color: #555;
    }
    .sp-keys {
      background: #f3f4f6;
      border-radius: 4px;
      padding: 2px 6px;
      font-family: monospace;
      font-size: 0.85rem;
      box-shadow: 0 1px 0 #ccc;
    }
  `],
})
export class JournalComponent implements OnDestroy {
  taskService = inject(TaskService);
  private aiSummaryService = inject(AiSummaryService);
  private storageService = inject(StorageService);
  private dialog = inject(MatDialog);

  loadingAi = signal(false);
  private _forceWork = signal(false);
  private _shortcutsPanelOpen = signal(false);


  toggleShortcutsPanel() {
    this._shortcutsPanelOpen.set(!this._shortcutsPanelOpen());
  }

  shortcutsPanelOpen() {
    return this._shortcutsPanelOpen();
  }

  /* ── Raccourcis clavier & panneau ── */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this._shortcutsPanelOpen() && !target.closest('.shortcuts-wrap')) {
      this._shortcutsPanelOpen.set(false);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    // Ignorer si un input / textarea / select a le focus ou si une dialog est ouverte
    const tag = (event.target as HTMLElement)?.tagName?.toLowerCase();
    if (['input', 'textarea', 'select', 'mat-select'].includes(tag)) return;
    if (document.querySelector('mat-dialog-container')) return;

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

  ngOnDestroy() {}

  /* ── Rest day ── */
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
    const idx = date.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % this.REST_MESSAGES.length;
    return this.REST_MESSAGES[idx];
  }

  forceWorkMode(): void {
    this._forceWork.set(true);
  }

  /* ── Navigation ── */
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
    this.clearSummary();
    this.taskService.loadDay(d.toISOString().slice(0, 10));
  }

  nextDay() {
    const d = new Date(this.taskService.currentDate() + 'T12:00:00');
    d.setDate(d.getDate() + 1);
    this._forceWork.set(false);
    this.clearSummary();
    this.taskService.loadDay(d.toISOString().slice(0, 10));
  }

  goToToday() {
    this._forceWork.set(false);
    this.clearSummary();
    this.taskService.loadDay(new Date().toISOString().slice(0, 10));
  }

  /* ── Stats ── */
  countTodo()       { return this.taskService.tasks().filter(t => t.state === 'TODO').length; }
  countInProgress() { return this.taskService.tasks().filter(t => t.state === 'IN_PROGRESS').length; }
  countDone()       { return this.taskService.tasks().filter(t => t.state === 'DONE').length; }

  /* ── AI Summary ── */
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

  /* ── Dialogs ── */
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

  /* ── Task events ── */
  onTaskUpdated(task: Task) { this.taskService.updateTask(task); }
  onTaskDeleted(id: string) { this.taskService.deleteTask(id); }
  onReordered(tasks: Task[]) { this.taskService.reorder(tasks); }
}

