import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../../../core/models/task.model';
import {
  formatCommaSeparatedValues,
  normalizeCommaSeparatedValues,
  parseCommaSeparatedValues,
} from '../../../core/utils/comma-separated-values.util';

interface DialogData {
  task?: Task;
  date: string;
}

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatIconModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
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
      ticketNumber: [
        formatCommaSeparatedValues(parseCommaSeparatedValues(this.data.task?.ticketNumber)),
      ],
      createAnother: [false],
    });
  }

  submit(): void {
    if (this.form.valid) {
      const value = this.form.value;
      this.dialogRef.close({
        description: value['description'],
        ticketNumber: normalizeCommaSeparatedValues(value['ticketNumber']),
        createAnother: !!value['createAnother'],
      });
    }
  }
}
