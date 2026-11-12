import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { Task, TaskState } from '../../../core/models/task.model';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, DragDropModule, MatIconModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskEdit = new EventEmitter<Task>();
  @Output() reordered = new EventEmitter<Task[]>();

  readonly groups = [
    { state: TaskState.IN_PROGRESS, label: 'En cours', className: 'in-progress' },
    { state: TaskState.TODO, label: 'À faire', className: 'todo' },
    { state: TaskState.DONE, label: 'Terminées', className: 'done' },
    { state: TaskState.CANCELLED, label: 'Annulées', className: 'cancelled' },
  ];

  reorderAnnouncement = signal('');

  tasksForState(state: TaskState): Task[] {
    return this.tasks.filter((task) => task.state === state);
  }

  trackById(_: number, task: Task): string {
    return task.id;
  }

  onDrop(event: CdkDragDrop<Task[]>): void {
    const list = [...this.tasks];
    const dragged = list[event.previousIndex];
    const target = list[event.currentIndex];
    if (!dragged || !target || dragged.state !== target.state) return;

    moveItemInArray(list, event.previousIndex, event.currentIndex);
    this.reordered.emit(list);
  }

  moveTask(task: Task, direction: -1 | 1, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const list = [...this.tasks];
    const index = list.findIndex((item) => item.id === task.id);
    const targetIndex = index + direction;
    if (index < 0 || !list[targetIndex] || list[targetIndex].state !== task.state) return;

    moveItemInArray(list, index, targetIndex);
    this.reordered.emit(list);
    const group = list.filter((item) => item.state === task.state);
    const position = group.findIndex((item) => item.id === task.id) + 1;
    this.reorderAnnouncement.set(`${task.description}, position ${position} sur ${group.length}.`);
  }
}
