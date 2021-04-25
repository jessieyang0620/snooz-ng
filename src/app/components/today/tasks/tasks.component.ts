import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Task} from 'src/app/data-structs/Task';
import {TasksService} from 'src/app/services/tasks.service';
import {TaskFormComponent} from '../../forms/task-form/task-form.component';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

    tasksList: Task[];

    constructor(private tasksService: TasksService,
                private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.tasksList = this.tasksService.getAllTasks();
    }

    openModal(): void {
        const modalRef = this.modalService.open(TaskFormComponent);
    }
}
