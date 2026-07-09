import { Component } from '@angular/core';
import { ResponsiveTableComponent } from './components/responsive-table/responsive-table';
import { SAMPLE_TASKS, TABLE_COLUMNS } from './models/task.model';

@Component({
  selector: 'app-root',
  imports: [ResponsiveTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly columns = TABLE_COLUMNS;
  protected readonly tasks = SAMPLE_TASKS;
}
