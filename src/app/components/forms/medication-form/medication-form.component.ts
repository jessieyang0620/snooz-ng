import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DOSAGE_UNIT} from 'src/app/data-structs/Medication';
import {HealthService} from 'src/app/services/health.service';

// for form data saving
export class MedicationForm {
    constructor(
        public name: string,
        public dosage: number,
        public unit: string,
        public comment?: string
    ) {
    }
}

@Component({
    selector: 'app-medication-form',
    templateUrl: './medication-form.component.html',
    styleUrls: ['./medication-form.component.css']
})
export class MedicationFormComponent implements OnInit {

    units: string[] = ['mg', 'ml', 'g'];

    model: MedicationForm;
    å;

    constructor(public activeModal: NgbActiveModal,
                private healthService: HealthService) {
        this.model = new MedicationForm('', 0, 'g', '');
    }

    ngOnInit(): void {
    }

    addToMedicationService(): void {
        let unit: DOSAGE_UNIT;
        if (this.model.unit == 'mg') {
            unit = DOSAGE_UNIT.mg;
        }
        if (this.model.unit == 'ml') {
            unit = DOSAGE_UNIT.ml;
        }
        if (this.model.unit == 'g') {
            unit = DOSAGE_UNIT.g;
        }

        this.healthService.addMedication(this.model.name, this.model.dosage, unit, this.model.comment);
    }

    addMedication(): void {
        this.addToMedicationService();
        this.activeModal.close();
    }

}
