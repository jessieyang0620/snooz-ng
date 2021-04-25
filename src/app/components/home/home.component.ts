import {Component, OnInit} from '@angular/core';
import {NAV_OPTIONS} from '../navbar/navbar.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    currentNav = NAV_OPTIONS.HOME;

    constructor() {
    }

    ngOnInit(): void {
    }

}
