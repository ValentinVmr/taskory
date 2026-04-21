import { Component, Input, Output, EventEmitter, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task, TaskState } from '../../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DragDropModule, TaskCardComponent],
  template: `
    <div class="task-list" cdkDropList (cdkDropListDropped)="onDrop($event)">

      <!-- Bloc IN_PROGRESS -->
      <ng-container *ngIf="inProgress().length > 0">
        <div class="group-header in-progress-header">
          <span class="group-dot"></span>
          🔄 En cours <span class="group-count">({{ inProgress().length }})</span>
        </div>
        <app-task-card
          *ngFor="let task of inProgress(); trackBy: trackById"
          [task]="task"
          cdkDrag
          (stateChanged)="taskUpdated.emit($event)"
          (deleted)="taskDeleted.emit($event)"
          (edit)="taskEdit.emit($event)"
        >
          <div class="drag-handle" cdkDragHandle><span class="drag-dots">⠿</span></div>
        </app-task-card>
      </ng-container>

      <!-- Séparateur -->
      <div class="group-divider" *ngIf="inProgress().length > 0 && todo().length > 0"></div>

      <!-- Bloc TODO -->
      <ng-container *ngIf="todo().length > 0">
        <div class="group-header todo-header">
          <span class="group-dot"></span>
          📌 À faire <span class="group-count">({{ todo().length }})</span>
        </div>
        <app-task-card
          *ngFor="let task of todo(); trackBy: trackById"
          [task]="task"
          cdkDrag
          (stateChanged)="taskUpdated.emit($event)"
          (deleted)="taskDeleted.emit($event)"
          (edit)="taskEdit.emit($event)"
        >
          <div class="drag-handle" cdkDragHandle><span class="drag-dots">⠿</span></div>
        </app-task-card>
      </ng-container>

      <!-- Séparateur -->
      <div class="group-divider" *ngIf="done().length > 0 && (todo().length > 0 || inProgress().length > 0)"></div>

      <!-- Bloc DONE -->
      <ng-container *ngIf="done().length > 0">
        <div class="group-header done-header">
          <span class="group-dot"></span>
          ✅ Terminées <span class="group-count">({{ done().length }})</span>
        </div>
        <app-task-card
          *ngFor="let task of done(); trackBy: trackById"
          [task]="task"
          cdkDrag
          (stateChanged)="taskUpdated.emit($event)"
          (deleted)="taskDeleted.emit($event)"
          (edit)="taskEdit.emit($event)"
        >
          <div class="drag-handle" cdkDragHandle><span class="drag-dots">⠿</span></div>
        </app-task-card>
      </ng-container>

      <!-- État vide -->
      <div class="empty-state" *ngIf="tasks.length === 0">
        🎉 Aucune tâche pour cette journée.<br>Cliquez sur "Nouvelle tâche" pour commencer !
      </div>
    </div>
  `,
  styles: [`
    .task-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 80px;
    }

    .group-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      padding: 4px 4px 2px;
      color: #888;
    }

    .group-count { font-weight: 400; }

    .group-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .in-progress-header .group-dot { background: #FFB300; }
    .todo-header .group-dot { background: #bdbdbd; }
    .done-header .group-dot { background: #43a047; }

    .group-divider {
      border: none;
      border-top: 1.5px dashed #e0e0e0;
      margin: 6px 0;
    }

    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: #aaa;
      font-size: 1rem;
      border: 2px dashed #e0e0e0;
      border-radius: 12px;
      line-height: 1.8;
    }

    .drag-handle {
      display: flex;
      align-items: center;
      cursor: grab;
      color: #bbb;
      padding: 0 4px;
      font-size: 1.2rem;
    }
    .drag-handle:active { cursor: grabbing; }

    .cdk-drag-preview { box-shadow: 0 8px 32px rgba(0,0,0,0.18) !important; border-radius: 12px !important; }
    .cdk-drag-placeholder { opacity: 0.3; }
    .cdk-drag-animating { transition: transform 250ms cubic-bezier(0, 0, 0.2, 1); }
  `],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskEdit = new EventEmitter<Task>();
  @Output() reordered = new EventEmitter<Task[]>();

  inProgress() { return this.tasks.filter(t => t.state === TaskState.IN_PROGRESS); }
  todo()       { return this.tasks.filter(t => t.state === TaskState.TODO); }
  done()       { return this.tasks.filter(t => t.state === TaskState.DONE); }

  trackById(_: number, t: Task) { return t.id; }

  onDrop(event: CdkDragDrop<Task[]>) {
    const list = [...this.tasks];
    moveItemInArray(list, event.previousIndex, event.currentIndex);
    this.reordered.emit(list);
  }
}
