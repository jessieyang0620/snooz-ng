import {Component, Input, OnInit} from '@angular/core';
import {Medication} from 'src/app/data-structs/Medication';

@Component({
    selector: 'app-medication-info',
    templateUrl: './medication-info.component.html',
    styleUrls: ['./medication-info.component.css']
})
export class MedicationInfoComponent implements OnInit {

    @Input() medication: Medication; // this basically allows the user of this component
    // to pass through a specific medication to work on when this component is created.
    // it's kind of like a constructor parameter.
    constructor() {
    }

    ngOnInit(): void {
    }

}
