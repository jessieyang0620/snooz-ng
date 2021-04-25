import {Component, Input, OnInit} from '@angular/core';

export enum NAV_OPTIONS {
    TODAY, HOME, CALENDAR
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    @Input() current: NAV_OPTIONS;

    constructor() {
    }

    ngOnInit(): void {
    }

    isToday(): boolean {
        return this.current === NAV_OPTIONS.TODAY;
    }

    isHome(): boolean {
        return this.current === NAV_OPTIONS.HOME;
    }

    isCalendar(): boolean {
        return this.current === NAV_OPTIONS.CALENDAR;
    }
}
