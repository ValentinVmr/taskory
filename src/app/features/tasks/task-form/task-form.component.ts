import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../../core/models/task.model';

interface DialogData {
  task?: Task;
  date: string;
}

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <h2 mat-dialog-title>
      <mat-icon>{{ data.task ? 'edit' : 'add_task' }}</mat-icon>
      {{ data.task ? 'Modifier la tâche' : 'Nouvelle tâche' }}
    </h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="task-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description *</mat-label>
          <textarea
            matInput
            formControlName="description"
            rows="3"
            placeholder="Décrivez la tâche..."
          ></textarea>
          <mat-error *ngIf="form.get('description')?.hasError('required')">
            La description est obligatoire
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>N° de ticket (optionnel)</mat-label>
          <input matInput formControlName="ticketNumber" placeholder="ex: PROJ-123" />
          <mat-icon matPrefix>confirmation_number</mat-icon>
        </mat-form-field>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Annuler</button>
      <button
        mat-raised-button
        color="primary"
        (click)="submit()"
        [disabled]="form.invalid"
      >
        {{ data.task ? 'Mettre à jour' : 'Créer' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content { padding-top: 8px !important; }

    .task-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 400px;
    }

    .full-width { width: 100%; }

    h2[mat-dialog-title] {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 480px) {
      .task-form { min-width: unset; }
      .dates-row { flex-direction: column; }
    }
  `],
})
export class TaskFormComponent {
  form: ReturnType<FormBuilder['group']>;

  constructor(
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      description: [this.data.task?.description || '', Validators.required],
      ticketNumber: [this.data.task?.ticketNumber || ''],
    });
  }

  submit() {
    if (this.form.valid) {
      const v = this.form.value;
      this.dialogRef.close({
        description: v['description'],
        ticketNumber: v['ticketNumber'] || undefined,
      });
    }
  }
}
