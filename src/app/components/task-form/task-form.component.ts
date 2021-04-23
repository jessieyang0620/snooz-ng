import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/data-structs/Task';
import { TasksService } from 'src/app/services/tasks.service';
import { Date } from '../../data-structs/Task';
export enum TaskType {
  EDIT, ADD
}
// note to self fix later bc interface 
export class TaskTemp {
  constructor(
    public title: string,
    public complete: boolean,
    public fromTime?: Time,
    public fromDate?: Date,
    public toTime?: Time,
    public toDate?: Date,
    public dueTime?: Time,
    public dueDate?: Date,
    public category?: string) {}
}

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  minutes: number[] = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  submitted: boolean = false;

  model = new TaskTemp(
    '', 
    false, 
    {hours: -1, minutes: -1}, 
    {month: -1, day: -1, year: -1},
    {hours: -1, minutes: -1}, 
    {month: -1, day: -1, year: -1},
    {hours: -1, minutes: -1}, 
    {month: -1, day: -1, year: -1},
    '');

  constructor(public activeModal: NgbActiveModal,
    private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
    this.activeModal.close();
  }
}
