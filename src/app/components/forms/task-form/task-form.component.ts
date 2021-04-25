import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {TasksService} from 'src/app/services/tasks.service';

export enum TaskType {
    EDIT, ADD
}

// note to self fix later bc interface
export class TaskTemp {
    constructor(
        public title: string,
        public complete: boolean,
        public fromTime?: NgbTimeStruct,
        public fromDate?: NgbDateStruct,
        public toTime?: NgbTimeStruct,
        public toDate?: NgbDateStruct,
        public dueTime?: NgbTimeStruct,
        public dueDate?: NgbDateStruct,
        public category?: string) {
    }
}

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    hours: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    minutes: number[] = [0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    submitted = false;

    model = new TaskTemp(
        '',
        false,
        {hour: 0, minute: 0, second: 0},
        {month: 0, day: 0, year: 0},
        {hour: 0, minute: 0, second: 0},
        {month: 0, day: 0, year: 0},
        {hour: 0, minute: 0, second: 0},
        {month: 0, day: 0, year: 0},
        '');

    constructor(public activeModal: NgbActiveModal,
                private tasksService: TasksService) {
    }

    ngOnInit(): void {
    }

    addTask(): void {
        this.submitted = true;
        console.log(JSON.stringify(this.model));
        this.activeModal.close();
    }
}
