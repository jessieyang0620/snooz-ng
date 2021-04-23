import { Time } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Date, Task } from 'src/app/data-structs/Task';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {
  @Input() task: Task;
  
  constructor() { }

  ngOnInit(): void {
  }

  formatTime(t: Time): string {
    let minutes: string;
    if (t.minutes === 0) {
      minutes = '00';
    } else {
      minutes = t.minutes.toString();
    }
    if (t.hours > 12) {
      return (t.hours % 12) + ':' + minutes + ' PM';
    }
    return t.hours + ':' + minutes + ' AM';
  }

  formatDate(d: Date): string {
    let temp: string = '';
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
        temp+= 'ERR.';
    }

    temp = temp + ' ' + d.day + ' ' + d.year;
    return temp;
  }

  toggleComplete(): void {
    this.task.complete = !this.task.complete;
  }
}
