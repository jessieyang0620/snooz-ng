import {Component, Input, OnInit} from '@angular/core';
import {DOSAGE_UNIT, Medication} from 'src/app/data-structs/Medication';

@Component({
    selector: 'app-medications-entry',
    templateUrl: './medications-entry.component.html',
    styleUrls: ['./medications-entry.component.css']
})
export class MedicationsEntryComponent implements OnInit {
    index = 0;
    @Input() medication: Medication;

    constructor() {
    }

    ngOnInit(): void {
    }

    getUnit(): string {
        switch (this.medication.unit) {
            case DOSAGE_UNIT.g:
                return 'g';
            case DOSAGE_UNIT.mg:
                return 'mg';
            case DOSAGE_UNIT.ml:
                return 'ml';
        }
    }

}
