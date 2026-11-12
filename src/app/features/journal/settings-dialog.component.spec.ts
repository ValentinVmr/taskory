import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '../../core/services/storage.service';
import { TaskService } from '../../core/services/task.service';
import { SettingsDialogComponent } from './settings-dialog.component';

describe('SettingsDialogComponent', () => {
  const close = vi.fn();
  const setLlmConfig = vi.fn();
  const setWorkingDaysConfig = vi.fn();

  beforeEach(async () => {
    close.mockReset();
    setLlmConfig.mockReset();
    setWorkingDaysConfig.mockReset();
    await TestBed.configureTestingModule({
      imports: [SettingsDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close } },
        {
          provide: StorageService,
          useValue: {
            getLlmConfig: () => undefined,
            getWorkingDaysConfig: () => [1, 2, 3, 4, 5],
            setLlmConfig,
            setWorkingDaysConfig,
          },
        },
        { provide: TaskService, useValue: { getRootTasksForExportCount: () => 0 } },
      ],
    }).compileComponents();
  });

  it('saves the selected provider and working days through the redesigned controls', () => {
    const fixture = TestBed.createComponent(SettingsDialogComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    element.querySelector<HTMLInputElement>('#ai-enabled')!.click();
    fixture.detectChanges();
    const provider = [...element.querySelectorAll<HTMLButtonElement>('.provider-card')].find(
      (button) => button.textContent?.includes('Google Gemini'),
    );
    expect(provider).toBeDefined();
    provider!.click();
    fixture.detectChanges();

    const saturday = [...element.querySelectorAll<HTMLLabelElement>('.day-option')].find(
      (label) => label.textContent?.trim() === 'Sam',
    );
    expect(saturday).toBeDefined();
    saturday!.querySelector('input')!.click();
    fixture.componentInstance.save();

    expect(setLlmConfig).toHaveBeenCalledWith(
      expect.objectContaining({
        enabled: true,
        provider: 'gemini',
        model: 'gemini-2.0-flash-lite',
      }),
    );
    expect(setWorkingDaysConfig).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6]);
    expect(close).toHaveBeenCalledWith(true);
  });
});
