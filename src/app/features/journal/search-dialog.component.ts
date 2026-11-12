import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../core/services/task.service';
import { Task, TaskState } from '../../core/models/task.model';
import { parseCommaSeparatedValues } from '../../core/utils/comma-separated-values.util';

@Component({
  selector: 'app-search-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatDialogModule],
  templateUrl: './search-dialog.component.html',
  styleUrl: './search-dialog.component.scss',
})
export class SearchDialogComponent {
  private taskService = inject(TaskService);
  private dialogRef = inject(MatDialogRef<SearchDialogComponent>);

  searchQuery = signal('');
  searchResults = signal<Task[]>([]);

  onSearchChange(value: string): void {
    this.searchQuery.set(value);
    this.searchResults.set(value.trim() ? this.taskService.searchTasks(value) : []);
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.searchResults.set([]);
  }

  selectTask(task: Task): void {
    this.dialogRef.close(task);
  }

  ticketNumbers(task: Task): string[] {
    return parseCommaSeparatedValues(task.ticketNumber);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  formatState(state: TaskState): string {
    const states: Record<TaskState, string> = {
      [TaskState.TODO]: 'À faire',
      [TaskState.IN_PROGRESS]: 'En cours',
      [TaskState.DONE]: 'Terminée',
      [TaskState.CANCELLED]: 'Annulée',
    };
    return states[state];
  }

  formatDate(date: string): string {
    const day = new Date(date + 'T12:00:00');
    return day.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
