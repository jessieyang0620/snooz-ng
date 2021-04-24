import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DayViewComponent } from '../day-view/day-view.component';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {

  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  startsOnBuffer: number[] = [1,2,3]; // ?? make better later
  endsOnBuffer: number[] = [1,2];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal(dd: number): void {
    const modalRef = this.modalService.open(DayViewComponent);
    modalRef.componentInstance.dd = dd;
    modalRef.componentInstance.mm = 4;
    modalRef.componentInstance.yyyy = 2021;
  }

}
