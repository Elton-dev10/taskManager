import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { TaskStatus } from '../../models/task-status';
import { TaskPriority } from '../../models/task-priority';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['id', 'title', 'responsible', 'actions'];
  filterStatus: TaskStatus | null = null;
  filterResponsible: string | null = null;
  filterTitle: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks(
      this.filterStatus || undefined,
      undefined,
      this.filterResponsible || undefined
    ).subscribe(tasks => {
      this.tasks = tasks.filter(task => {
        if (this.filterTitle) {
          return task.title.toLowerCase().includes(this.filterTitle.toLowerCase());
        }
        return true;
      });
    });
  }

  onFilterChange(): void {
    this.loadTasks();
  }

  deleteTask(id: number): void {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }

  completeTask(task: Task): void {
    const updatedTask: Task = {
      ...task,
      status: TaskStatus.CONCLUIDA
    };
    this.taskService.updateTask(task.id!, updatedTask).subscribe(() => {
      this.loadTasks();
    });
  }
} 