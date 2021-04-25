import {Component, Input, OnInit} from '@angular/core';
import {Symptom, SYMPTOM_TYPE} from 'src/app/data-structs/Symptom';

@Component({
    selector: 'app-health-entry',
    templateUrl: './health-entry.component.html',
    styleUrls: ['./health-entry.component.css']
})
export class HealthEntryComponent implements OnInit {

    rating: number[] = [1, 2, 3, 4, 5];

    @Input() symptom: Symptom;

    constructor() {
    }

    ngOnInit(): void {
    }

    colorCode(): string {
        switch (this.symptom.type) {
            case SYMPTOM_TYPE.MENTAL:
                return 'bg-warning';
            case SYMPTOM_TYPE.PHYSICAL:
                return 'bg-danger';
        }
    }
}
