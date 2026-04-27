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
          </ng-container>
        </span>
      </button>

      <!-- Content -->
      <div class="task-content">
        <div class="task-header">
          <span class="ticket-badge" *ngIf="task.ticketNumber">#{{ task.ticketNumber }}</span>
          <span class="carried-badge" *ngIf="task.carriedOver" matTooltip="Reportée du jour précédent">↩ Reportée</span>
        </div>
        <p class="task-description" [class.done-text]="task.state === 'DONE'">{{ task.description }}</p>
        <div class="task-dates">
          <span class="date-chip">
            <mat-icon class="date-icon">calendar_today</mat-icon>
            Créé le : {{ task.startDate | localDate }}
          </span>
          <span class="date-chip done-date" *ngIf="task.endDate">
            <mat-icon class="date-icon">check_circle</mat-icon>
            Terminé le : {{ task.endDate | localDate }}
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div class="task-actions">
        <button mat-icon-button (click)="edit.emit(task)" matTooltip="Modifier">
          <mat-icon>edit</mat-icon>
        </button>
        <button mat-icon-button (click)="delete()" matTooltip="Supprimer" color="warn">
          <mat-icon>delete</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .task-card {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      background: #fff;
      border: 1.5px solid #e0e0e0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      transition: box-shadow 0.2s, border-color 0.2s;
    }

    .task-card:hover {
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    }

    .task-card.todo { border-left: 4px solid #bdbdbd; }
    .task-card.in-progress { border-left: 4px solid #FFB300; background: #fffde7; }
    .task-card.done { border-left: 4px solid #43a047; background: #f1f8e9; }

    /* Checkbox */
    .state-checkbox {
      width: 28px;
      height: 28px;
      min-width: 28px;
      border-radius: 6px;
      border: 2px solid #bdbdbd;
      background: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      padding: 0;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .state-checkbox.in-progress {
      border-color: #FFB300;
      background: #FFB300;
    }

    .state-checkbox.done {
      border-color: #43a047;
      background: #43a047;
    }

    .checkbox-inner {
      font-size: 0.9rem;
      font-weight: bold;
      line-height: 1;
    }

    .icon-todo { display: block; width: 10px; height: 10px; }
    .icon-inprogress { color: #fff; font-size: 1rem; line-height: 1; }
    .icon-done { color: #fff; font-size: 1rem; line-height: 1; }

    /* Content */
    .task-content { flex: 1; min-width: 0; }

    .task-header {
      display: flex;
      gap: 8px;
      margin-bottom: 4px;
      flex-wrap: wrap;
    }

    .ticket-badge {
      background: #e3f2fd;
      color: #1565c0;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .carried-badge {
      background: #fce4ec;
      color: #c62828;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .task-description {
      margin: 0 0 6px;
      font-size: 0.95rem;
      line-height: 1.5;
      word-break: break-word;
    }

    .done-text {
      text-decoration: line-through;
      color: #9e9e9e;
    }

    .task-dates {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .date-chip {
      font-size: 0.75rem;
      color: #757575;
      display: flex;
      align-items: center;
      gap: 3px;
    }

    .date-icon {
      font-size: 13px;
      width: 13px;
      height: 13px;
      line-height: 1;
    }

    .date-chip.done-date {
      color: #43a047;
      font-weight: 500;
    }

    /* Actions */
    .task-actions {
      display: flex;
      flex-direction: column;
      gap: 0;
      flex-shrink: 0;
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
    };
    return map[this.task.state];
  }

  get stateLabel() {
    const map: Record<TaskState, string> = {
      [TaskState.TODO]: 'À faire — cliquer pour En cours',
      [TaskState.IN_PROGRESS]: 'En cours — cliquer pour Terminé',
      [TaskState.DONE]: 'Terminé — cliquer pour À faire',
    };
    return map[this.task.state];
  }

  cycleState() {
    const next: Record<TaskState, TaskState> = {
      [TaskState.TODO]: TaskState.IN_PROGRESS,
      [TaskState.IN_PROGRESS]: TaskState.DONE,
      [TaskState.DONE]: TaskState.TODO,
    };
    const nextState = next[this.task.state];
    const today = new Date().toISOString().slice(0, 10);
    const endDate = nextState === TaskState.DONE ? today : '';
    this.stateChanged.emit({ ...this.task, state: nextState, endDate });
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
