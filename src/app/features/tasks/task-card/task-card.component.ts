import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { Task, TaskState } from '../../../core/models/task.model';
import { LocalDatePipe } from '../../../core/pipes/local-date.pipe';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';
import { parseCommaSeparatedValues } from '../../../core/utils/comma-separated-values.util';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule, LocalDatePipe],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() stateChanged = new EventEmitter<Task>();
  @Output() deleted = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Task>();

  private dialog = inject(MatDialog);

  get stateClass(): string {
    const classes: Record<TaskState, string> = {
      [TaskState.TODO]: 'todo',
      [TaskState.IN_PROGRESS]: 'in-progress',
      [TaskState.DONE]: 'done',
      [TaskState.CANCELLED]: 'cancelled',
    };
    return classes[this.task.state];
  }

  get stateLabel(): string {
    const labels: Record<TaskState, string> = {
      [TaskState.TODO]: 'À faire — passer en cours',
      [TaskState.IN_PROGRESS]: 'En cours — marquer comme terminée',
      [TaskState.DONE]: 'Terminée — remettre à faire',
      [TaskState.CANCELLED]: 'Annulée — rouvrir',
    };
    return labels[this.task.state];
  }

  ticketNumbers(): string[] {
    return parseCommaSeparatedValues(this.task.ticketNumber);
  }

  cycleState(): void {
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

  cancelTask(): void {
    const today = new Date().toISOString().slice(0, 10);
    this.stateChanged.emit({ ...this.task, state: TaskState.CANCELLED, endDate: today });
  }

  reopenTask(): void {
    this.stateChanged.emit({ ...this.task, state: TaskState.TODO, endDate: '' });
  }

  delete(): void {
    const ref = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '420px',
      maxWidth: 'calc(100vw - 32px)',
      data: { description: this.task.description },
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (confirmed) this.deleted.emit(this.task.id);
    });
  }
}
