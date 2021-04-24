import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Day } from 'src/app/data-structs/Day';
import { Medication } from 'src/app/data-structs/Medication';
import { Symptom } from 'src/app/data-structs/Symptom';
import { Task } from 'src/app/data-structs/Task';
import { DayService } from 'src/app/services/day.service';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

  day: Day;
  @Input() dd: number;
  @Input() mm: number;
  @Input() yyyy: number;
  constructor(public activeModal: NgbActiveModal,
    private dayService: DayService) { }

  ngOnInit(): void {
    this.day = this.dayService.getDay(this.dd);
  }

  getMonth(): string {
    switch(this.mm) {
      case 1: return 'January';
      case 2: return 'February';
      case 3: return 'March';
      case 4: return 'April';
      case 5: return 'May';
      case 6: return 'June';
      case 7: return 'July';
      case 8: return 'August';
      case 9: return 'September';
      case 10: return 'October';
      case 11: return 'November';
      case 12: return 'December';
      default: return 'N/a';
    }
  }

  getTasks(): Task[] {
    return this.day.tasks;
  }

  getSymptoms(): Symptom[] {
    return this.day.symptoms;
  }

  getMedications(): Medication[] {
    return this.day.medications;
  }

  toggleEdit(): void {}
}
