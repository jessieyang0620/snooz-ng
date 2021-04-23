import { Component, Input, OnInit } from '@angular/core';
import { TODAY_OPTIONS } from '../today.component';


@Component({
  selector: 'app-today-header',
  templateUrl: './today-header.component.html',
  styleUrls: ['./today-header.component.css']
})
export class TodayHeaderComponent implements OnInit {
  @Input() current: TODAY_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

  isTasks(): boolean {
    return this.current === TODAY_OPTIONS.TASKS;
  }
  isHealth(): boolean {
    return this.current === TODAY_OPTIONS.HEALTH;
  }
}
