import { Component, OnInit } from '@angular/core';
import { NAV_OPTIONS } from '../navbar/navbar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  currentNav = NAV_OPTIONS.CALENDAR;
  constructor() { }

  ngOnInit(): void {
  }

}
