import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-confirm-all-delete-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  template: `
    <div class="confirmation-heading">
      <span class="confirmation-icon"><mat-icon aria-hidden="true">delete_sweep</mat-icon></span>
      <h2 mat-dialog-title>Supprimer les tâches du jour ?</h2>
    </div>
    <mat-dialog-content class="dialog-content confirmation-content">
      <p>
        {{ data.count }} tâche{{ data.count === 1 ? '' : 's' }} de cette journée
        {{ data.count === 1 ? 'sera supprimée' : 'seront supprimées' }} définitivement.
      </p>
      <p>Cette action est irréversible.</p>
    </mat-dialog-content>
    <mat-dialog-actions class="dialog-actions confirmation-actions">
      <button class="btn btn-ghost" type="button" (click)="dialogRef.close(false)">Annuler</button>
      <button class="btn btn-error" type="button" (click)="dialogRef.close(true)">
        Tout supprimer
      </button>
    </mat-dialog-actions>
  `,
})
export class ConfirmAllDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmAllDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { count: number },
  ) {}
}
