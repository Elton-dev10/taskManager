import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { TaskStatus } from '../../models/task-status';
import { TaskPriority } from '../../models/task-priority';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.less']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  isEditing = false;
  taskId: number | null = null;
  statusOptions = Object.values(TaskStatus);
  priorityOptions = Object.values(TaskPriority);
  responsibleOptions: string[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['', Validators.required],
      priority: ['', Validators.required],
      responsible: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadResponsibles();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.taskId = +id;
      this.loadTask(this.taskId);
    }
  }

  loadResponsibles(): void {
    this.taskService.getEnums().subscribe(data => {
      if (data && data.responsibles) {
        this.responsibleOptions = data.responsibles;
      }
    });
  }

  loadTask(id: number): void {
    this.taskService.getTask(id).subscribe(task => {
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        status: task.status,
        priority: task.priority,
        responsible: task.responsible,
        deadline: task.deadline
      });
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;
      
      if (this.isEditing && this.taskId) {
        this.taskService.updateTask(this.taskId, task).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      } else {
        this.taskService.createTask(task).subscribe(() => {
          this.router.navigate(['/tasks']);
        });
      }
    }
  }
} 