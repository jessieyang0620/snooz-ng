import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Day } from 'src/app/data-structs/Day';
import { Task } from 'src/app/data-structs/Task';
import { DayService } from 'src/app/services/day.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;
  @Input() day: Day;

  model: Task;
  constructor(public activeModal: NgbActiveModal,
    private dayService: DayService) { }

  ngOnInit(): void {
    
  }

}
