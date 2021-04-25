import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Day} from 'src/app/data-structs/Day';
import {Symptom, SYMPTOM_TYPE} from 'src/app/data-structs/Symptom';
import {DayService} from 'src/app/services/day.service';
import {SymptomForm} from '../../forms/symptom-form/symptom-form.component';

@Component({
    selector: 'app-edit-symptom',
    templateUrl: './edit-symptom.component.html',
    styleUrls: ['./edit-symptom.component.css']
})
export class EditSymptomComponent implements OnInit {

    @Input() sym: Symptom;
    @Input() day: Day;

    model: SymptomForm;
    severityLevels: number[] = [1, 2, 3, 4, 5];
    symptomType: string[] = ['Mental', 'Physical'];

    constructor(public activeModal: NgbActiveModal,
                private dayService: DayService) {
    }

    ngOnInit(): void {
        let type: string;
        if (this.sym.type === SYMPTOM_TYPE.MENTAL) {
            type = this.symptomType[0];
        } else {
            type = this.symptomType[1];
        }
        this.model = new SymptomForm(this.sym.name, this.sym.severity, type, this.sym.comments);
    }

    editSymptom(): void {

        // delete original
        this.dayService.deleteDay(this.day);
        // delete the prior med
        this.day.symptoms.forEach((s, index) => {
            if (s == this.sym) {
                this.day.symptoms.splice(index, 1);
            }
        });
        //  add new
        let type: SYMPTOM_TYPE;
        if (this.model.type === this.symptomType[0]) {
            type = SYMPTOM_TYPE.MENTAL;
        } else {
            type = SYMPTOM_TYPE.PHYSICAL;
        }
        const newSym: Symptom = {name: this.model.name, severity: this.model.severity, type: type, comments: this.model.comments};
        // console.log(JSON.stringify(newMed));
        this.day.symptoms.push(newSym);

        // console.log(JSON.stringify(this.day));
        // push to service
        this.dayService.addDay(this.day);
        this.activeModal.close();
    }
}
