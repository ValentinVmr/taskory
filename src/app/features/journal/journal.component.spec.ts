import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { LlmConfig, Task, TaskState } from '../../core/models/task.model';
import { AiSummaryService } from '../../core/services/ai-summary.service';
import { StorageService } from '../../core/services/storage.service';
import { TaskService } from '../../core/services/task.service';
import { JournalComponent } from './journal.component';

function task(id: string, state: TaskState): Task {
  return {
    id,
    description: `Tâche ${id}`,
    state,
    startDate: '2026-11-12',
    endDate: '',
    order: 0,
    originDate: '2026-11-12',
    carriedOver: false,
  };
}

describe('JournalComponent', () => {
  let component: JournalComponent;
  let currentDate: ReturnType<typeof signal<string>>;
  let workingDays: number[];
  let llmConfig: LlmConfig | undefined;
  let taskService: {
    tasks: ReturnType<typeof signal<Task[]>>;
    currentDate: ReturnType<typeof signal<string>>;
    aiSummary: ReturnType<typeof signal<string>>;
    saveAiSummary: ReturnType<typeof vi.fn>;
    getPreviousDayTasks: ReturnType<typeof vi.fn>;
    loadDay: ReturnType<typeof vi.fn>;
  };
  let summaryService: { generateSummary: ReturnType<typeof vi.fn> };
  let dialog: { openDialogs: never[]; open: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    currentDate = signal('2026-11-12');
    workingDays = [1, 2, 3, 4, 5];
    llmConfig = undefined;
    taskService = {
      tasks: signal([
        task('todo', TaskState.TODO),
        task('done', TaskState.DONE),
        task('cancelled', TaskState.CANCELLED),
      ]),
      currentDate,
      aiSummary: signal(''),
      saveAiSummary: vi.fn(),
      getPreviousDayTasks: vi.fn().mockReturnValue([task('previous', TaskState.DONE)]),
      loadDay: vi.fn((date: string) => currentDate.set(date)),
    };
    summaryService = { generateSummary: vi.fn() };
    dialog = { openDialogs: [], open: vi.fn(() => ({ afterClosed: () => of(true) })) };

    await TestBed.configureTestingModule({
      imports: [JournalComponent],
      providers: [
        { provide: TaskService, useValue: taskService },
        {
          provide: StorageService,
          useValue: {
            getWorkingDaysConfig: () => workingDays,
            getLlmConfig: () => llmConfig,
          },
        },
        { provide: AiSummaryService, useValue: summaryService },
        { provide: MatDialog, useValue: dialog },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(JournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('excludes cancelled tasks from the completion percentage', () => {
    expect(component.countActive()).toBe(2);
    expect(component.completionPercentage()).toBe(50);
  });

  it('labels summaries as local until an enabled provider has an API key', () => {
    llmConfig = { enabled: true, provider: 'gemini', model: 'gemini-2.5-flash', apiKey: '' };
    expect(component.aiEnabled()).toBe(false);

    llmConfig.apiKey = 'test-key';
    expect(component.aiEnabled()).toBe(true);
  });

  it('updates the rest-day view after settings are saved', () => {
    expect(component.isNonWorkingDay()).toBe(false);
    workingDays = [];

    component.openSettings();

    expect(component.isNonWorkingDay()).toBe(true);
  });

  it('opens a search result even when its date is a non-working day', () => {
    const weekendTask = { ...task('weekend', TaskState.TODO), startDate: '2026-11-14' };
    dialog.open.mockReturnValue({ afterClosed: () => of(weekendTask) });

    component.openSearch();

    expect(taskService.loadDay).toHaveBeenCalledWith('2026-11-14');
    expect(component.isNonWorkingDay()).toBe(false);
  });

  it('does not attach a delayed summary to a different day', async () => {
    let resolveSummary!: (value: string) => void;
    summaryService.generateSummary.mockReturnValue(
      new Promise<string>((resolve) => {
        resolveSummary = resolve;
      }),
    );

    const pending = component.generateAiSummary();
    currentDate.set('2026-11-13');
    resolveSummary('Résumé précédent');
    await pending;

    expect(taskService.saveAiSummary).not.toHaveBeenCalled();
    expect(component.loadingAi()).toBe(false);
  });
});
