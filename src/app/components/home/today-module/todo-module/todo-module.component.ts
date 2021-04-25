import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/data-structs/Task';
import {TasksService} from 'src/app/services/tasks.service';

@Component({
    selector: 'app-todo-module',
    templateUrl: './todo-module.component.html',
    styleUrls: ['./todo-module.component.css']
})
export class TodoModuleComponent implements OnInit {
    tasksList: Task[];

    constructor(private tasksService: TasksService) {
    }

    ngOnInit(): void {
        this.tasksList = this.tasksService.getAllTasks().slice(0, 3);
    }
}
