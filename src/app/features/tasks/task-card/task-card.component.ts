import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Task, TaskState } from '../../../core/models/task.model';
import { LocalDatePipe } from '../../../core/pipes/local-date.pipe';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, LocalDatePipe],
  template: `
    <div class="task-card" [ngClass]="stateClass">
      <!-- Drag handle projected -->
      <ng-content></ng-content>

      <!-- Checkbox -->
      <button
        class="state-checkbox"
        [ngClass]="stateClass"
        (click)="cycleState()"
        [matTooltip]="stateLabel"
        type="button"
      >
        <span class="checkbox-inner">
          <ng-container [ngSwitch]="task.state">
            <span *ngSwitchCase="'TODO'" class="icon-todo"></span>
            <span *ngSwitchCase="'IN_PROGRESS'" class="icon-inprogress">—</span>
            <span *ngSwitchCase="'DONE'" class="icon-done">✓</span>
            <span *ngSwitchCase="'CANCELLED'" class="icon-cancelled">✕</span>
          </ng-container>
        </span>
      </button>

      <!-- Content -->
      <div class="task-content">
        <div class="task-header">
          <span class="ticket-badge" *ngIf="task.ticketNumber">#{{ task.ticketNumber }}</span>
          <span class="carried-badge" *ngIf="task.carriedOver" matTooltip="Reportée du jour précédent">↩</span>
        </div>
        <p class="task-description" [class.done-text]="task.state === 'DONE' || task.state === 'CANCELLED'">{{ task.description }}</p>
        <div class="task-footer">
          <div class="task-dates">
            <span class="date-chip">
              <mat-icon class="date-icon">calendar_today</mat-icon>
              {{ task.startDate | localDate }}
            </span>
            <span class="date-chip done-date" *ngIf="task.endDate">
              <mat-icon class="date-icon">check_circle</mat-icon>
              {{ task.endDate | localDate }}
            </span>
          </div>

          <!-- Actions - visible au survol -->
          <div class="task-actions">
            <button mat-icon-button *ngIf="task.state !== 'CANCELLED'" (click)="cancelTask()" matTooltip="Annuler" class="action-btn">
              <mat-icon>block</mat-icon>
            </button>
            <button mat-icon-button *ngIf="task.state === 'CANCELLED'" (click)="reopenTask()" matTooltip="Réouvrir" class="action-btn">
              <mat-icon>replay</mat-icon>
            </button>
            <button mat-icon-button (click)="edit.emit(task)" matTooltip="Modifier" class="action-btn">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button (click)="delete()" matTooltip="Supprimer" class="action-btn action-danger">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .task-card {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 8px;
      background: #fff;
      border: 1.5px solid #e0e0e0;
      box-shadow: 0 1px 3px rgba(0,0,0,0.06);
      transition: all 0.2s;
    }

    .task-card:hover {
      box-shadow: 0 3px 12px rgba(0,0,0,0.12);
    }

    .task-card.todo { border-left: 3px solid #bdbdbd; }
    .task-card.in-progress { border-left: 3px solid #FFB300; background: #fffef7; }
    .task-card.done { border-left: 3px solid #43a047; background: #f8fbf6; }
    .task-card.cancelled { border-left: 3px solid #e53935; background: #fff5f5; }

    /* Checkbox */
    .state-checkbox {
      width: 24px;
      height: 24px;
      min-width: 24px;
      border-radius: 5px;
      border: 2px solid #bdbdbd;
      background: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      padding: 0;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .state-checkbox:hover {
      transform: scale(1.1);
    }

    .state-checkbox.in-progress {
      border-color: #FFB300;
      background: #FFB300;
    }

    .state-checkbox.done {
      border-color: #43a047;
      background: #43a047;
    }

    .state-checkbox.cancelled {
      border-color: #e53935;
      background: #e53935;
    }

    .checkbox-inner {
      font-size: 0.85rem;
      font-weight: bold;
      line-height: 1;
    }

    .icon-todo { display: block; width: 8px; height: 8px; }
    .icon-inprogress { color: #fff; font-size: 0.9rem; line-height: 1; }
    .icon-done { color: #fff; font-size: 0.9rem; line-height: 1; }
    .icon-cancelled { color: #fff; font-size: 0.85rem; line-height: 1; }

    /* Content */
    .task-content { flex: 1; min-width: 0; }

    .task-header {
      display: flex;
      gap: 6px;
      margin-bottom: 3px;
      flex-wrap: wrap;
    }

    .ticket-badge {
      background: #e3f2fd;
      color: #1565c0;
      padding: 1px 6px;
      border-radius: 10px;
      font-size: 0.7rem;
      font-weight: 600;
      line-height: 1.4;
    }

    .carried-badge {
      background: #fce4ec;
      color: #c62828;
      padding: 1px 5px;
      border-radius: 10px;
      font-size: 0.7rem;
      font-weight: 500;
      line-height: 1.4;
    }

    .task-description {
      margin: 0 0 6px;
      font-size: 0.9rem;
      line-height: 1.4;
      word-break: break-word;
    }

    .done-text {
      text-decoration: line-through;
      color: #9e9e9e;
    }

    .task-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .task-dates {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      flex: 1;
    }

    .date-chip {
      font-size: 0.7rem;
      color: #757575;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .date-icon {
      font-size: 12px;
      width: 12px;
      height: 12px;
      line-height: 1;
    }

    .date-chip.done-date {
      color: #43a047;
      font-weight: 500;
    }

    /* Actions - visible au survol */
    .task-actions {
      display: flex;
      gap: 2px;
      opacity: 0;
      transition: opacity 0.2s;
      flex-shrink: 0;
    }

    .task-card:hover .task-actions {
      opacity: 1;
    }

    .action-btn {
      width: 32px;
      height: 32px;
      line-height: 32px;
    }

    .action-btn mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      line-height: 18px;
    }

    .action-danger:hover {
      color: #d32f2f;
    }
  `],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() stateChanged = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Task>();

  private dialog = inject(MatDialog);

  get stateClass() {
    const map: Record<TaskState, string> = {
      [TaskState.TODO]: 'todo',
      [TaskState.IN_PROGRESS]: 'in-progress',
      [TaskState.DONE]: 'done',
      [TaskState.CANCELLED]: 'cancelled',
    };
    return map[this.task.state];
  }

  get stateLabel() {
    const map: Record<TaskState, string> = {
      [TaskState.TODO]: 'À faire — cliquer pour En cours',
      [TaskState.IN_PROGRESS]: 'En cours — cliquer pour Terminé',
      [TaskState.DONE]: 'Terminé — cliquer pour À faire',
      [TaskState.CANCELLED]: 'Annulée — cliquer pour Réouvrir',
    };
    return map[this.task.state];
  }

  cycleState() {
    const next: Record<TaskState, TaskState> = {
      [TaskState.TODO]: TaskState.IN_PROGRESS,
      [TaskState.IN_PROGRESS]: TaskState.DONE,
      [TaskState.DONE]: TaskState.TODO,
      [TaskState.CANCELLED]: TaskState.TODO,
    };
    const nextState = next[this.task.state];
    const today = new Date().toISOString().slice(0, 10);
    const endDate = nextState === TaskState.DONE ? today : '';
    this.stateChanged.emit({ ...this.task, state: nextState, endDate });
  }

  cancelTask() {
    const today = new Date().toISOString().slice(0, 10);
    this.stateChanged.emit({ ...this.task, state: TaskState.CANCELLED, endDate: today });
  }

  reopenTask() {
    this.stateChanged.emit({ ...this.task, state: TaskState.TODO, endDate: '' });
  }

  delete() {
    const ref = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '380px',
      data: { description: this.task.description },
    });
    ref.afterClosed().subscribe(confirmed => {
      if (confirmed) this.deleted.emit(this.task.id);
    });
  }
}
