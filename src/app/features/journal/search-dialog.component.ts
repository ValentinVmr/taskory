import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../core/services/task.service';
import { Task, TaskState } from '../../core/models/task.model';

@Component({
  selector: 'app-search-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
  ],
  template: `
    <div class="search-container">
      <h2 mat-dialog-title>Rechercher un ticket</h2>

      <mat-form-field class="search-field">
        <mat-label>Description ou numéro de ticket</mat-label>
        <input matInput
          [ngModel]="searchQuery()"
          (ngModelChange)="onSearchChange($event)"
          placeholder="Ex: DEV-123 ou Implémenter login"
          autofocus>
        <button mat-icon-button matSuffix *ngIf="searchQuery()" (click)="clearSearch()">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>

      <div class="results" *ngIf="searchQuery()">
        <div *ngIf="searchResults().length === 0" class="no-results">
          Aucun résultat trouvé
        </div>

        <mat-list *ngIf="searchResults().length > 0">
          <mat-list-item *ngFor="let task of searchResults()" class="result-item" (click)="selectTask(task)">
            <div class="result-content">
              <div class="result-ticket">
                <strong>{{ task.ticketNumber || 'Sans numéro' }}</strong>
              </div>
              <div class="result-description">{{ task.description }}</div>
              <div class="result-date">
                <span class="state-badge" [ngClass]="'state-' + task.state">{{ formatState(task.state) }}</span>
                {{ formatDate(task.startDate) }}
              </div>
            </div>
            <mat-icon class="result-chevron" aria-hidden="true">chevron_right</mat-icon>
          </mat-list-item>
        </mat-list>
      </div>

      <div mat-dialog-actions align="end">
        <button mat-button (click)="cancel()">Annuler</button>
      </div>
    </div>
  `,
  styles: [`
    .search-container {
      min-width: 500px;
      max-width: 600px;
    }

    h2 {
      margin: 0 0 16px 0;
    }

    .search-field {
      width: 100%;
      margin-bottom: 16px;
    }

    .results {
      max-height: 400px;
      overflow-y: auto;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .no-results {
      padding: 24px;
      text-align: center;
      color: #999;
      font-size: 0.9rem;
    }

    mat-list {
      padding: 0 !important;
    }

    .result-item {
      cursor: pointer;
      transition: background-color 0.2s;
      padding: 0 8px !important;
      margin: 0 !important;
      min-height: 72px;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    .result-chevron {
      color: #9e9e9e;
      flex-shrink: 0;
    }

    .result-content {
      flex: 1;
      padding: 12px 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
    }

    .result-ticket {
      font-size: 0.9rem;
      color: #667eea;
      min-height: 20px;
    }

    .result-description {
      font-size: 0.95rem;
      color: #333;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .result-date {
      font-size: 0.8rem;
      color: #999;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .state-badge {
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
      text-transform: uppercase;

      &.state-TODO {
        background-color: #f0f0f0;
        color: #666;
      }

      &.state-IN_PROGRESS {
        background-color: #fff8e1;
        color: #f57f17;
      }

      &.state-DONE {
        background-color: #e8f5e9;
        color: #2e7d32;
      }

      &.state-CANCELLED {
        background-color: #ffebee;
        color: #c62828;
      }
    }

    [mat-dialog-actions] {
      padding: 16px 0 0 0 !important;
      margin: 0 !important;
      gap: 8px;
    }

    @media (max-width: 600px) {
      .search-container {
        min-width: auto;
        max-width: 100%;
      }
    }
  `],
})
export class SearchDialogComponent {
  private taskService = inject(TaskService);
  private dialogRef = inject(MatDialogRef<SearchDialogComponent>);

  searchQuery = signal('');
  searchResults = signal<Task[]>([]);

  onSearchChange(value: string) {
    this.searchQuery.set(value);
    const query = this.searchQuery();
    if (query.trim().length > 0) {
      this.searchResults.set(this.taskService.searchTasks(query));
    } else {
      this.searchResults.set([]);
    }
  }

  clearSearch() {
    this.searchQuery.set('');
    this.searchResults.set([]);
  }

  selectTask(task: Task) {
    this.dialogRef.close(task);
  }

  cancel() {
    this.dialogRef.close(null);
  }

  formatState(state: TaskState): string {
    const states: Record<TaskState, string> = {
      [TaskState.TODO]: 'À faire',
      [TaskState.IN_PROGRESS]: 'En cours',
      [TaskState.DONE]: 'Terminée',
      [TaskState.CANCELLED]: 'Annulée',
    };
    return states[state] || state;
  }

  formatDate(date: string): string {
    const d = new Date(date + 'T12:00:00');
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
}
