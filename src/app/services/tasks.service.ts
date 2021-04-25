import {Injectable} from '@angular/core';
import {Task} from '../data-structs/Task';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private static idCounter = 3;
    private tasks: Task[] = [
        {
            id: 0,
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
            id: 1,
            title: 'HCI presentation',
            fromTime: {hour: 12, minute: 50, second: 0},
            fromDate: {month: 4, day: 15, year: 2021},
            toTime: {hour: 12, minute: 0, second: 0},
            toDate: {month: 4, day: 15, year: 2021},
            complete: false
        },
        {
            id: 2,
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
            id: TasksService.idCounter,
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
        TasksService.idCounter++;
    }

    updateTask(id: number,
               title?: string,
               fromTime?: NgbTimeStruct,
               fromDate?: NgbDateStruct,
               toTime?: NgbTimeStruct,
               toDate?: NgbDateStruct,
               dueTime?: NgbTimeStruct,
               dueDate?: NgbDateStruct,
               category?: string): void {
        let i = 0;
        while (i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i] = Object.assign({}, this.tasks[i], {
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
        }
    }

    deleteTask(id: number): void {
        let i = this.tasks.length;
        while (i--) {
            if (this.tasks[i].id === id) {
                this.tasks.splice(i, 1);
            }
        }
    }

    getTask(id: number): Task {
        for (const t of this.tasks) {
            if (t.id === id) {
                return t;
            }
        }
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
