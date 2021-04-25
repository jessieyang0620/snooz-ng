import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HealthService} from '../../../services/health.service';
import {Symptom, SYMPTOM_TYPE} from '../../../data-structs/Symptom';

export class SymptomForm {
    constructor(
        public name: string,
        public severity: number,
        public type: SYMPTOM_TYPE,
        public comments?: string
    ) {
    }
}

@Component({
    selector: 'app-edit-symptom-form',
    templateUrl: './edit-symptom-form.component.html',
    styleUrls: ['./edit-symptom-form.component.css']
})
export class EditSymptomFormComponent implements OnInit {
    @Input() initSymptom: Symptom;
    model: SymptomForm;
    severityLevels: number[] = [1, 2, 3, 4, 5];
    symptomType: string[] = ['Mental', 'Physical'];

    constructor(public activeModal: NgbActiveModal,
                private healthService: HealthService) {
        this.model = new SymptomForm('', 1, SYMPTOM_TYPE.MENTAL, '');
    }

    ngOnInit(): void {
        this.model.name = this.initSymptom.name;
        this.model.severity = this.initSymptom.severity;
        this.model.type = this.initSymptom.type;
        this.model.comments = this.initSymptom.comments;
    }

    updateSymptom(): void {
        this.healthService.updateSymptom(this.model.name, this.model.comments, this.model.severity, this.model.type);
        this.activeModal.close();
    }
}
