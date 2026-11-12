import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../../core/services/storage.service';
import { TaskService } from '../../core/services/task.service';
import { LLM_PROVIDERS, LlmProviderDef } from '../../core/services/ai-summary.service';
import { LlmProvider, DEFAULT_WORKING_DAYS } from '../../core/models/task.model';

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatIconModule],
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.scss',
})
export class SettingsDialogComponent implements OnInit {
  dialogRef = inject(MatDialogRef<SettingsDialogComponent>);
  private storage = inject(StorageService);
  private taskService = inject(TaskService);
  private fb = inject(FormBuilder);

  providers = LLM_PROVIDERS;
  showKey = false;

  weekDays = [
    { value: 1, label: 'Lun' },
    { value: 2, label: 'Mar' },
    { value: 3, label: 'Mer' },
    { value: 4, label: 'Jeu' },
    { value: 5, label: 'Ven' },
    { value: 6, label: 'Sam' },
    { value: 0, label: 'Dim' },
  ];

  private workingDays: number[] = [...DEFAULT_WORKING_DAYS];

  form = this.fb.group({
    enabled: [false],
    provider: ['openai' as LlmProvider, Validators.required],
    model: ['gpt-4o-mini', Validators.required],
    apiKey: [''],
  });

  get currentProvider(): LlmProviderDef | undefined {
    return this.providers.find((provider) => provider.id === this.form.get('provider')?.value);
  }

  ngOnInit(): void {
    const saved = this.storage.getLlmConfig();
    if (saved) {
      this.form.patchValue({ ...saved, enabled: saved.enabled ?? false });
    }
    this.workingDays = [...this.storage.getWorkingDaysConfig()];
  }

  isWorkingDay(day: number): boolean {
    return this.workingDays.includes(day);
  }

  toggleWorkingDay(day: number, checked: boolean): void {
    if (checked) {
      if (!this.workingDays.includes(day)) this.workingDays.push(day);
    } else {
      this.workingDays = this.workingDays.filter((value) => value !== day);
    }
  }

  selectProvider(provider: LlmProviderDef): void {
    this.form.patchValue({ provider: provider.id, model: provider.models[0].id });
  }

  save(): void {
    const value = this.form.value;
    this.storage.setLlmConfig({
      provider: value.provider as LlmProvider,
      model: value.model!,
      apiKey: value.apiKey || '',
      enabled: value.enabled ?? false,
    });
    this.storage.setWorkingDaysConfig(this.workingDays);
    this.dialogRef.close(true);
  }

  allTaskCount(): number {
    return this.taskService.getRootTasksForExportCount();
  }

  exportTasks(format: 'json' | 'csv'): void {
    if (this.allTaskCount() === 0) return;

    const today = new Date().toISOString().slice(0, 10);
    const baseName = `todo-plus-tasks-${today}`;
    const content =
      format === 'json'
        ? this.taskService.exportAllTasksAsJson()
        : this.taskService.exportAllTasksAsCsv();
    const mimeType =
      format === 'json' ? 'application/json;charset=utf-8' : 'text/csv;charset=utf-8';
    const extension = format === 'json' ? 'json' : 'csv';

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${baseName}.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  }
}
