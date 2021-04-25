import {Injectable} from '@angular/core';
import {Task} from '../data-structs/Task';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks: Task[] = [
        {
            title: 'HCI final project',
            fromTime: {hour: 7, minute: 30, second: 0},
            fromDate: {month: 4, day: 14, year: 2021},
            toTime: {hour: 13, minute: 45, second: 0},
            toDate: {month: 4, day: 14, year: 2021},
            dueTime: {hour: 11, minute: 0, second: 0},
            dueDate: {month: 4, day: 22, year: 2021},
            category: 'School',
            complete: false
        },
        {
            title: 'HCI presentation',
            fromTime: {hour: 12, minute: 50, second: 0},
            fromDate: {month: 4, day: 15, year: 2021},
            toTime: {hour: 12, minute: 0, second: 0},
            toDate: {month: 4, day: 15, year: 2021},
            complete: false
        },
        {
            title: 'get laundry',
            complete: true
        }
    ];

    constructor() {
    }

    addTask(title: string,
            fromTime?: NgbTimeStruct,
            fromDate?: NgbDateStruct,
            toTime?: NgbTimeStruct,
            toDate?: NgbDateStruct,
            dueTime?: NgbTimeStruct,
            dueDate?: NgbDateStruct,
            category?: string): void {
        this.tasks.push({
            title,
            fromTime: fromTime || null,
            fromDate: fromDate || null,
            toTime: toTime || null,
            toDate: toDate || null,
            dueTime: dueTime || null,
            dueDate: dueDate || null,
            category: category || null,
            complete: false
        });
    }

    updateTask(): void {
    }

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
