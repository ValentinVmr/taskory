import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <mat-dialog-content>
      <div class="dialog-container">
        <mat-icon class="dialog-icon">delete_forever</mat-icon>
        <h2 class="dialog-title">Supprimer la tâche ?</h2>
        <p class="task-name">"{{ data.description }}"</p>
        <p class="warning-text">Cette action est irréversible.</p>
      </div>
    </mat-dialog-content>
    <mat-dialog-actions align="center">
      <button mat-stroked-button (click)="dialogRef.close(false)">Annuler</button>
      <button mat-raised-button class="delete-btn" (click)="dialogRef.close(true)">
        <mat-icon>delete</mat-icon>
        Supprimer
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px 8px 0;
      min-width: 300px;
    }

    .dialog-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #d32f2f;
      margin-bottom: 12px;
    }

    .dialog-title {
      margin: 0 0 12px;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .task-name {
      font-weight: 600;
      color: #212121;
      margin: 0 0 6px;
      word-break: break-word;
    }

    .warning-text {
      color: #757575;
      font-size: 0.85rem;
      margin: 0;
    }

    mat-dialog-actions {
      gap: 8px;
    }

    .delete-btn {
      background-color: #d32f2f !important;
      color: #fff !important;
    }

    .delete-btn mat-icon {
      color: #fff !important;
    }
  `],
})
export class ConfirmDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string },
  ) {}
}
