import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SYMPTOM_TYPE } from 'src/app/data-structs/Symptom';
import { HealthService } from 'src/app/services/health.service';

export class SymptomForm {
  constructor(
    public name: string,
    public severity: number,
    public type: string,
    public comments?: string
  ) {};
}
@Component({
  selector: 'app-symptom-form',
  templateUrl: './symptom-form.component.html',
  styleUrls: ['./symptom-form.component.css']
})
export class SymptomFormComponent implements OnInit {

  model: SymptomForm;
  severityLevels: number[] = [1, 2, 3, 4, 5];
  symptomType: string[] = ['Mental', 'Physical'];
  constructor(public activeModal: NgbActiveModal,
    private healthService: HealthService) {
    this.model = new SymptomForm('', 1, this.symptomType[0], '')
   }

  ngOnInit(): void {
  }

  addSymptom(): void {
    console.log(JSON.stringify(this.model));
    let type: SYMPTOM_TYPE;
    if (this.model.type === this.symptomType[0]) {
      type = SYMPTOM_TYPE.MENTAL;
    }else {
      type = SYMPTOM_TYPE.PHYSICAL;
    }
    this.healthService.addSymptom(this.model.name, this.model.comments, this.model.severity, type);
    this.activeModal.close();
  }

}
