import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {TasksService} from 'src/app/services/tasks.service';
import {Task} from '../../../data-structs/Task';

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
    selector: 'app-edit-task',
    templateUrl: './edit-task.component.html',
    styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
    submitted = false;

    @Input() initTask: Task;

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
        this.model.title = this.initTask.title;
        this.model.complete = this.initTask.complete;
        this.model.fromTime = this.initTask.fromTime;
        this.model.fromDate = this.initTask.fromDate;
        this.model.toTime = this.initTask.toTime;
        this.model.toDate = this.initTask.toDate;
        this.model.dueTime = this.initTask.dueTime;
        this.model.dueDate = this.initTask.dueDate;
        this.model.category = this.initTask.category;
    }

    updateTask(): void {
        this.submitted = true;
        this.tasksService.updateTask(this.initTask.id, this.model.title, this.model.fromTime, this.model.fromDate, this.model.toTime, this.model.toDate, this.model.dueTime, this.model.dueDate);
        this.activeModal.close();
    }
}
