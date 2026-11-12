import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  template: `
    <div class="confirmation-heading">
      <span class="confirmation-icon"><mat-icon aria-hidden="true">delete_outline</mat-icon></span>
      <h2 mat-dialog-title>Supprimer cette tâche ?</h2>
    </div>
    <mat-dialog-content class="dialog-content confirmation-content">
      <p class="confirmation-task">« {{ data.description }} »</p>
      <p>Cette tâche et ses reports seront supprimés définitivement.</p>
    </mat-dialog-content>
    <mat-dialog-actions class="dialog-actions confirmation-actions">
      <button class="btn btn-ghost" type="button" (click)="dialogRef.close(false)">Annuler</button>
      <button class="btn btn-error" type="button" (click)="dialogRef.close(true)">Supprimer</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { description: string },
  ) {}
}
