import {Component, Input, OnInit} from '@angular/core';
import {Task} from 'src/app/data-structs/Task';
import {NgbDateStruct, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {EditTaskComponent} from '../../../edit-popups/edit-task/edit-task.component';

@Component({
    selector: 'app-task-entry',
    templateUrl: './task-entry.component.html',
    styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {
    @Input() task: Task;

    constructor(private modalService: NgbModal) {
    }

    ngOnInit(): void {
    }

    formatTime(t: NgbTimeStruct): string {
        let minute: string;
        if (t.minute === 0) {
            minute = '00';
        } else {
            minute = t.minute.toString();
        }
        if (t.hour > 12) {
            return (t.hour % 12) + ':' + minute + ' PM';
        }
        return t.hour + ':' + minute + ' AM';
    }

    formatDate(d: NgbDateStruct): string {
        let temp = '';
        switch (d.month) {
            case 1:
                temp += 'Jan.';
                break;
            case 2:
                temp += 'Feb.';
                break;
            case 3:
                temp += 'Mar.';
                break;
            case 4:
                temp += 'Apr.';
                break;
            case 5:
                temp += 'May.';
                break;
            case 6:
                temp += 'Jun.';
                break;
            case 7:
                temp += 'Jul.';
                break;
            case 8:
                temp += 'Aug.';
                break;
            case 9:
                temp += 'Sep.';
                break;
            case 10:
                temp += 'Oct.';
                break;
            case 11:
                temp += 'Nov.';
                break;
            case 12:
                temp += 'Dec.';
                break;
            default:
                temp += 'ERR.';
        }

        temp = temp + ' ' + d.day + ' ' + d.year;
        return temp;
    }

    toggleComplete(): void {
        this.task.complete = !this.task.complete;
    }

    openModal(): void {
        const modalRef = this.modalService.open(EditTaskComponent);
        modalRef.componentInstance.initTask = this.task;
    }
}
