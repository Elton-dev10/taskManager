import { TaskPriority } from './task-priority';
import { TaskStatus } from './task-status';

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  responsible: string;
  deadline: string;
  createdAt?: string;
} 