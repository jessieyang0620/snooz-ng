import { Component, OnInit } from '@angular/core';
import { NAV_OPTIONS } from '../navbar/navbar.component';

export enum TODAY_OPTIONS {
  HEALTH, TASKS
}

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  currentNav = NAV_OPTIONS.TODAY;
  currentTab = TODAY_OPTIONS.TASKS;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentTab(tab: TODAY_OPTIONS) {
    if (tab === TODAY_OPTIONS.TASKS) {
      this.currentTab = TODAY_OPTIONS.TASKS;
    } else {
      this.currentTab = TODAY_OPTIONS.HEALTH;
    }
  }
  
  isTasks(): boolean {
    return this.currentTab === TODAY_OPTIONS.TASKS;
  }

  isHealth(): boolean {
    return this.currentTab === TODAY_OPTIONS.HEALTH;
  }
}
