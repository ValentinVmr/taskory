import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StorageService } from '../../core/services/storage.service';
import { LLM_PROVIDERS, LlmProviderDef } from '../../core/services/ai-summary.service';
import { LlmProvider, DEFAULT_WORKING_DAYS } from '../../core/models/task.model';

@Component({
  selector: 'app-settings-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule, MatDividerModule, MatSlideToggleModule, MatCheckboxModule,
  ],
  template: `
    <div class="settings-header">
      <mat-icon class="settings-icon">settings</mat-icon>
      <h2 mat-dialog-title>Paramètres du résumé</h2>
    </div>

    <mat-dialog-content>
      <form [formGroup]="form" class="settings-form">

        <!-- Toggle activation IA -->
        <div class="toggle-row">
          <div class="toggle-label">
            <mat-icon class="toggle-icon">auto_awesome</mat-icon>
            <div>
              <div class="toggle-title">Résumé par IA</div>
              <div class="toggle-sub">{{ form.get('enabled')?.value ? 'Activé — utilise le LLM configuré' : 'Désactivé — résumé local uniquement' }}</div>
            </div>
          </div>
          <mat-slide-toggle formControlName="enabled" color="primary"></mat-slide-toggle>
        </div>

        <mat-divider class="divider"></mat-divider>

        <!-- Contenu visible seulement si activé -->
        <ng-container *ngIf="form.get('enabled')?.value">

        <!-- Sélection du provider -->
        <p class="section-label">Fournisseur de LLM</p>
        <div class="provider-grid">
          <button
            *ngFor="let p of providers"
            type="button"
            class="provider-card"
            [class.selected]="form.get('provider')?.value === p.id"
            (click)="selectProvider(p)"
          >
            <span class="provider-logo">{{ p.logo }}</span>
            <span class="provider-name">{{ p.label }}</span>
          </button>
        </div>

        <mat-divider class="divider"></mat-divider>

        <!-- Modèle -->
        <mat-form-field appearance="outline" class="full-width" *ngIf="currentProvider">
          <mat-label>Modèle</mat-label>
          <mat-select formControlName="model">
            <mat-option *ngFor="let m of currentProvider.models" [value]="m.id">
              {{ m.label }}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <!-- Clé API -->
        <mat-form-field appearance="outline" class="full-width" *ngIf="currentProvider">
          <mat-label>Clé API {{ currentProvider.label }}</mat-label>
          <input
            matInput
            [type]="showKey ? 'text' : 'password'"
            formControlName="apiKey"
            placeholder="sk-..."
            autocomplete="off"
          />
          <button mat-icon-button matSuffix (click)="showKey = !showKey" type="button">
            <mat-icon>{{ showKey ? 'visibility_off' : 'visibility' }}</mat-icon>
          </button>
          <mat-hint>
            <a [href]="currentProvider.docUrl" target="_blank" class="doc-link">
              <mat-icon class="hint-icon">open_in_new</mat-icon>
              Obtenir une clé API {{ currentProvider.label }}
            </a>
          </mat-hint>
        </mat-form-field>

        <!-- Info résumé local -->
        <div class="info-box" *ngIf="!currentProvider || !form.get('apiKey')?.value">
          <mat-icon>info</mat-icon>
          <span>Sans clé API, un résumé local sera généré automatiquement.</span>
        </div>

        </ng-container>

        <mat-divider class="divider"></mat-divider>

        <!-- Jours ouvrés -->
        <p class="section-label">
          <mat-icon class="section-icon">date_range</mat-icon>
          Jours ouvrés
        </p>
        <div class="working-days-grid">
          <mat-checkbox
            *ngFor="let day of weekDays"
            [checked]="isWorkingDay(day.value)"
            (change)="toggleWorkingDay(day.value, $event.checked)"
            color="primary"
          >{{ day.label }}</mat-checkbox>
        </div>

      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Annuler</button>
      <button mat-raised-button color="primary" (click)="save()" [disabled]="form.invalid">
        <mat-icon>save</mat-icon>
        Sauvegarder
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .settings-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 24px 0;
    }

    .settings-icon { color: #3f51b5; font-size: 28px; width: 28px; height: 28px; }

    h2[mat-dialog-title] { margin: 0; font-size: 1.3rem; }

    mat-dialog-content { padding-top: 16px !important; min-width: 440px; }

    .settings-form { display: flex; flex-direction: column; gap: 12px; }

    .section-label {
      margin: 0 0 8px;
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #888;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .section-icon { font-size: 16px; width: 16px; height: 16px; }

    .working-days-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 6px 4px;
    }

    .provider-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-bottom: 4px;
    }

    .provider-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      padding: 14px 8px;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      background: #fff;
      cursor: pointer;
      transition: all 0.18s;
      font-family: inherit;
    }

    .provider-card:hover {
      border-color: #7986cb;
      background: #f5f5ff;
    }

    .provider-card.selected {
      border-color: #3f51b5;
      background: #e8eaf6;
      box-shadow: 0 0 0 2px #3f51b533;
    }

    .provider-logo { font-size: 1.8rem; line-height: 1; }

    .provider-name { font-size: 0.82rem; font-weight: 600; color: #333; }

    .divider { margin: 8px 0 !important; }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 4px 0;
    }

    .toggle-label {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .toggle-icon { color: #764ba2; }

    .toggle-title { font-weight: 600; font-size: 0.95rem; }

    .toggle-sub { font-size: 0.78rem; color: #888; margin-top: 2px; }

    .full-width { width: 100%; }

    .doc-link {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      color: #3f51b5;
      text-decoration: none;
      font-size: 0.75rem;
    }

    .doc-link:hover { text-decoration: underline; }

    .hint-icon { font-size: 12px; width: 12px; height: 12px; }

    .info-box {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: #e3f2fd;
      border-radius: 8px;
      font-size: 0.85rem;
      color: #1565c0;
    }

    .info-box mat-icon { font-size: 18px; width: 18px; height: 18px; flex-shrink: 0; }

    mat-dialog-actions { gap: 8px; }

    @media (max-width: 480px) {
      mat-dialog-content { min-width: unset; }
      .provider-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `],
})
export class SettingsDialogComponent implements OnInit {
  dialogRef = inject(MatDialogRef<SettingsDialogComponent>);
  private storage = inject(StorageService);
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

  private _workingDays: number[] = [...DEFAULT_WORKING_DAYS];

  isWorkingDay(day: number): boolean {
    return this._workingDays.includes(day);
  }

  toggleWorkingDay(day: number, checked: boolean): void {
    if (checked) {
      if (!this._workingDays.includes(day)) this._workingDays.push(day);
    } else {
      this._workingDays = this._workingDays.filter(d => d !== day);
    }
  }

  form = this.fb.group({
    enabled: [false],
    provider: ['openai' as LlmProvider, Validators.required],
    model: ['gpt-4o-mini', Validators.required],
    apiKey: [''],
  });

  get currentProvider(): LlmProviderDef | undefined {
    return this.providers.find(p => p.id === this.form.get('provider')?.value);
  }

  ngOnInit(): void {
    const saved = this.storage.getLlmConfig();
    if (saved) {
      this.form.patchValue({ ...saved, enabled: saved.enabled ?? false });
    }
    this._workingDays = [...this.storage.getWorkingDaysConfig()];
  }

  selectProvider(p: LlmProviderDef): void {
    this.form.patchValue({ provider: p.id, model: p.models[0].id });
  }

  save(): void {
    const v = this.form.value;
    this.storage.setLlmConfig({
      provider: v.provider as LlmProvider,
      model: v.model!,
      apiKey: v.apiKey || '',
      enabled: v.enabled ?? false,
    });
    this.storage.setWorkingDaysConfig(this._workingDays);
    this.dialogRef.close(true);
  }
}

