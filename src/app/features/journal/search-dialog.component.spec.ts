import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { Task, TaskState } from '../../core/models/task.model';
import { TaskService } from '../../core/services/task.service';
import { SearchDialogComponent } from './search-dialog.component';

describe('SearchDialogComponent', () => {
  it('renders search results as keyboard-accessible buttons and selects the task', async () => {
    const task: Task = {
      id: 'one',
      description: 'Préparer le bilan',
      state: TaskState.TODO,
      startDate: '2026-11-12',
      endDate: '',
      ticketNumber: 'PROJ-123',
      order: 0,
      originDate: '2026-11-12',
      carriedOver: false,
    };
    const close = vi.fn();
    const searchTasks = vi.fn().mockReturnValue([task]);
    await TestBed.configureTestingModule({
      imports: [SearchDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close } },
        { provide: TaskService, useValue: { searchTasks } },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(SearchDialogComponent);
    fixture.componentInstance.onSearchChange('PROJ-123');
    fixture.detectChanges();

    const result = fixture.nativeElement.querySelector('.result-item') as HTMLButtonElement;
    expect(result.tagName).toBe('BUTTON');
    expect(result.textContent).toContain('Préparer le bilan');
    result.click();
    expect(searchTasks).toHaveBeenCalledWith('PROJ-123');
    expect(close).toHaveBeenCalledWith(task);
  });
});
