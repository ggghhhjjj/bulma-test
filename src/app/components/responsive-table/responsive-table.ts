import { Component, input } from '@angular/core';
import { TableColumn, Task, TaskPriority, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-responsive-table',
  imports: [],
  templateUrl: './responsive-table.html',
  styleUrl: './responsive-table.scss',
})
export class ResponsiveTableComponent {
  private static readonly STATUS_TAG_CLASS: Record<TaskStatus, string> = {
    active: 'is-info',
    pending: 'is-warning',
    blocked: 'is-danger',
    done: 'is-success',
  };

  private static readonly PRIORITY_TAG_CLASS: Record<TaskPriority, string> = {
    low: 'is-light',
    medium: 'is-link is-light',
    high: 'is-danger is-light',
  };

  readonly columns = input.required<TableColumn[]>();
  readonly rows = input.required<Task[]>();

  getCellValue(row: Task, key: keyof Task): string {
    return String(row[key]);
  }

  statusTagClass(status: TaskStatus): string {
    return `tag ${ResponsiveTableComponent.STATUS_TAG_CLASS[status]}`;
  }

  priorityTagClass(priority: TaskPriority): string {
    return `tag ${ResponsiveTableComponent.PRIORITY_TAG_CLASS[priority]}`;
  }
}
