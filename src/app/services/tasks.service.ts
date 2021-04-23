import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../data-structs/Task';
import {Date} from '../data-structs/Task';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
    {title: 'HCI final project', 
      fromTime: {hours: 7, minutes: 30}, 
      fromDate: {month: 4, day: 14, year: 2021}, 
      toTime: {hours: 13, minutes: 45},
      toDate: {month: 4, day: 14, year: 2021},
      dueTime: {hours: 11, minutes: 0},
      dueDate: {month: 4, day: 22, year:2021}, 
      category: 'School',
      complete: false},
    {title: 'HCI presentation',
      fromTime: {hours: 12, minutes: 50},
      fromDate: {month: 4, day: 15, year: 2021},
      toTime: {hours: 12, minutes: 0},
      toDate: {month: 4, day: 15, year: 2021},
      complete: false},
    {title: 'get laundry',
     complete: true}
  ]

  private _task: BehaviorSubject<Task[]>;

  constructor() { 
    this._task = new BehaviorSubject(this.tasks);
  }

  addTask(title: string, 
    fromTime?: Time, 
    fromDate?: Date, 
    toTime?: Time, 
    toDate?: Date, 
    dueTime?: Time, 
    dueDate?: Date, 
    category?: string): void {
      this.tasks.push({
        title: title,
        fromTime: fromTime || null,
        fromDate: fromDate || null,
        toTime: toTime || null,
        toDate: toDate||null,
        dueTime: dueTime || null,
        dueDate: dueDate || null,
        category: category || null,
        complete: false
      })
  }

  updateTask(): void {}

  deleteTask(title: string): void {
    for (let t of this.tasks) {
      
    }
  }

  getTask(title: string): Task {
    for (let t of this.tasks) {
      if (t.title === title) {
        return t;
      }
    }
  }
  
  getAllTasks(): Task[] {
    return this.tasks;
  }
}

