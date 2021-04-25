import {Component, OnInit} from '@angular/core';
import {NAV_OPTIONS} from '../navbar/navbar.component';

export enum CALENDAR_OPTIONS {
    DAY, WEEK, MONTH
}

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    currentNav = NAV_OPTIONS.CALENDAR;
    currentView = CALENDAR_OPTIONS.MONTH;


    constructor() {
    }

    ngOnInit(): void {
    }

    setCurrentView(view: CALENDAR_OPTIONS): void {

        this.currentView = view;
    }

    isDay(): boolean {
        return this.currentView === CALENDAR_OPTIONS.DAY;
    }

    isWeek(): boolean {
        return this.currentView === CALENDAR_OPTIONS.WEEK;
    }

    isMonth(): boolean {
        return this.currentView === CALENDAR_OPTIONS.MONTH;
    }
}
