import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Task, TaskState } from '../../../core/models/task.model';
import { TaskListComponent } from './task-list.component';

function task(id: string, state: TaskState, order: number): Task {
  return {
    id,
    description: `Tâche ${id}`,
    state,
    startDate: '2026-11-12',
    endDate: '',
    order,
    originDate: '2026-11-12',
    carriedOver: false,
  };
}

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let emitted: Task[][];

  beforeEach(() => {
    component = new TaskListComponent();
    component.tasks = [
      task('progress', TaskState.IN_PROGRESS, 0),
      task('first', TaskState.TODO, 1),
      task('second', TaskState.TODO, 2),
      task('done', TaskState.DONE, 3),
    ];
    emitted = [];
    component.reordered.subscribe((tasks) => emitted.push(tasks));
  });

  it('reorders tasks within a group with the keyboard and announces the position', () => {
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true });

    component.moveTask(component.tasks[1], 1, event);

    expect(event.defaultPrevented).toBe(true);
    expect(emitted[0].map((item) => item.id)).toEqual(['progress', 'second', 'first', 'done']);
    expect(component.reorderAnnouncement()).toContain('position 2 sur 2');
  });

  it('does not move a task into another state group with the keyboard', () => {
    component.moveTask(component.tasks[1], -1, new KeyboardEvent('keydown', { key: 'ArrowUp' }));

    expect(emitted).toHaveLength(0);
  });

  it('only accepts drag-and-drop reordering inside the same group', () => {
    component.onDrop({ previousIndex: 1, currentIndex: 3 } as CdkDragDrop<Task[]>);
    expect(emitted).toHaveLength(0);

    component.onDrop({ previousIndex: 1, currentIndex: 2 } as CdkDragDrop<Task[]>);
    expect(emitted[0].map((item) => item.id)).toEqual(['progress', 'second', 'first', 'done']);
  });
});
