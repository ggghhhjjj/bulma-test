export type TaskStatus = 'active' | 'pending' | 'blocked' | 'done';

export type TaskPriority = 'low' | 'medium' | 'high';

export interface TableColumn {
  key: keyof Task;
  label: string;
}

export interface Task {
  id: number;
  name: string;
  status: TaskStatus;
  priority: TaskPriority;
  owner: string;
  updated: string;
}

export const TABLE_COLUMNS: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'priority', label: 'Priority' },
  { key: 'owner', label: 'Owner' },
  { key: 'updated', label: 'Updated' },
];

export const SAMPLE_TASKS: Task[] = [
  { id: 1, name: 'Redesign landing page', status: 'active', priority: 'high', owner: 'Alice Chen', updated: '2026-07-08' },
  { id: 2, name: 'Fix checkout validation', status: 'blocked', priority: 'high', owner: 'Bob Martinez', updated: '2026-07-07' },
  { id: 3, name: 'Write API documentation', status: 'pending', priority: 'medium', owner: 'Carol Nguyen', updated: '2026-07-06' },
  { id: 4, name: 'Optimize image pipeline', status: 'active', priority: 'medium', owner: 'David Kim', updated: '2026-07-05' },
  { id: 5, name: 'Migrate auth service', status: 'done', priority: 'low', owner: 'Eva Patel', updated: '2026-07-04' },
  { id: 6, name: 'Add dark mode toggle', status: 'pending', priority: 'low', owner: 'Frank Lopez', updated: '2026-07-03' },
  { id: 7, name: 'Refactor data layer', status: 'active', priority: 'high', owner: 'Grace Wilson', updated: '2026-07-02' },
  { id: 8, name: 'Set up error monitoring', status: 'done', priority: 'medium', owner: 'Henry Brown', updated: '2026-07-01' },
  { id: 9, name: 'Create onboarding flow', status: 'active', priority: 'medium', owner: 'Iris Taylor', updated: '2026-06-30' },
  { id: 10, name: 'Audit accessibility', status: 'pending', priority: 'high', owner: 'Jack Anderson', updated: '2026-06-29' },
  { id: 11, name: 'Implement search filters', status: 'active', priority: 'low', owner: 'Kate Thomas', updated: '2026-06-28' },
  { id: 12, name: 'Update privacy policy', status: 'done', priority: 'low', owner: 'Leo Jackson', updated: '2026-06-27' },
  { id: 13, name: 'Build analytics dashboard', status: 'active', priority: 'high', owner: 'Mia White', updated: '2026-06-26' },
  { id: 14, name: 'Review security patches', status: 'blocked', priority: 'high', owner: 'Noah Harris', updated: '2026-06-25' },
  { id: 15, name: 'Prepare release notes', status: 'pending', priority: 'medium', owner: 'Olivia Clark', updated: '2026-06-24' },
];
