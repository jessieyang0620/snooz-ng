import {Component, Input, OnInit} from '@angular/core';
import {NAV_OPTIONS} from '../navbar/navbar.component';

export enum TODAY_OPTIONS {
    HEALTH, TASKS
}

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
    @Input() startingTab?;
    currentNav = NAV_OPTIONS.TODAY;
    currentTab = TODAY_OPTIONS.TASKS;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.startingTab);
        this.currentTab = TODAY_OPTIONS.TASKS;
    }

    setCurrentTab(tab: TODAY_OPTIONS): void {
        this.currentTab = tab;
    }

    isTasks(): boolean {
        return this.currentTab === TODAY_OPTIONS.TASKS;
    }

    isHealth(): boolean {
        return this.currentTab === TODAY_OPTIONS.HEALTH;
    }
}
