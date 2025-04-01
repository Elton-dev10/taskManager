import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';

@Pipe({
  name: 'uniqueResponsibles'
})
export class UniqueResponsiblesPipe implements PipeTransform {
  transform(tasks: Task[]): string[] {
    if (!tasks) return [];
    
    const responsibles = tasks.map(task => task.responsible);
    return [...new Set(responsibles)];
  }
} 