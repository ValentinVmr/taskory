import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  const close = vi.fn();

  beforeEach(async () => {
    close.mockReset();
    await TestBed.configureTestingModule({
      imports: [TaskFormComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close } },
        { provide: MAT_DIALOG_DATA, useValue: { date: '2026-11-12' } },
      ],
    }).compileComponents();
  });

  it('keeps an empty description invalid', () => {
    const component = TestBed.createComponent(TaskFormComponent).componentInstance;

    component.submit();

    expect(component.form.invalid).toBe(true);
    expect(close).not.toHaveBeenCalled();
  });

  it('normalizes ticket tags and preserves the create-another option', () => {
    const component = TestBed.createComponent(TaskFormComponent).componentInstance;
    component.form.patchValue({
      description: 'Préparer la réunion',
      ticketNumber: ' PROJ-1, api, proj-1 ',
      createAnother: true,
    });

    component.submit();

    expect(close).toHaveBeenCalledWith({
      description: 'Préparer la réunion',
      ticketNumber: 'PROJ-1, api',
      createAnother: true,
    });
  });
});
