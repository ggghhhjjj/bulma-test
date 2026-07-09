import { Component, input } from '@angular/core';
import { TableColumn, Task, TaskPriority, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-responsive-table',
  imports: [],
  templateUrl: './responsive-table.html',
  styleUrl: './responsive-table.scss',
})
export class ResponsiveTableComponent {
  readonly columns = input.required<TableColumn[]>();
  readonly rows = input.required<Task[]>();

  getCellValue(row: Task, key: keyof Task): string {
    return String(row[key]);
  }

  statusTagClass(status: TaskStatus): string {
    const map: Record<TaskStatus, string> = {
      active: 'is-info',
      pending: 'is-warning',
      blocked: 'is-danger',
      done: 'is-success',
    };
    return `tag ${map[status]}`;
  }

  priorityTagClass(priority: TaskPriority): string {
    const map: Record<TaskPriority, string> = {
      low: 'is-light',
      medium: 'is-link is-light',
      high: 'is-danger is-light',
    };
    return `tag ${map[priority]}`;
  }
}
