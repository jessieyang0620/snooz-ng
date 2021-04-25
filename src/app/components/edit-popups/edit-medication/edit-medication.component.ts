import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Day } from 'src/app/data-structs/Day';
import { DOSAGE_UNIT, Medication } from 'src/app/data-structs/Medication';
import { DayService } from 'src/app/services/day.service';
import { MedicationForm } from '../../forms/medication-form/medication-form.component';

@Component({
  selector: 'app-edit-medication',
  templateUrl: './edit-medication.component.html',
  styleUrls: ['./edit-medication.component.css']
})
export class EditMedicationComponent implements OnInit {

  @Input() day: Day;
  @Input() med: Medication;
  units: string[] = ['mg', 'ml', 'g'];

  model: MedicationForm;

  constructor(public activeModal: NgbActiveModal,
    private dayService: DayService) { 
      
    }

  ngOnInit(): void {
    let unit: string;
      if (this.med.unit == DOSAGE_UNIT.mg) unit = 'mg';
      if (this.med.unit == DOSAGE_UNIT.ml) unit = 'ml';
      if (this.med.unit == DOSAGE_UNIT.g) unit = 'g';

      this.model = new MedicationForm(this.med.name, this.med.dosage, unit, this.med.comment);
  }

  editMedication(): void {
    console.log('editng med');
    // delete original
    this.dayService.deleteDay(this.day);
    // delete the prior med
    this.day.medications.forEach((m,index)=>{
      if(m==this.med) {
        console.log('deleted med');
        this.day.medications.splice(index,1);
      }
    });
    //  add new
    let unit: DOSAGE_UNIT;
      if (this.model.unit == 'mg') unit = DOSAGE_UNIT.mg;
      if (this.model.unit == 'ml') unit = DOSAGE_UNIT.ml;
      if (this.model.unit == 'g') unit = DOSAGE_UNIT.g;

    const newMed: Medication = {name: this.model.name, dosage: this.model.dosage, unit: unit, comment: this.model.comment};
    // console.log(JSON.stringify(newMed));
    this.day.medications.push(newMed);

    console.log(JSON.stringify(this.day));
    // push to service
    this.dayService.addDay(this.day);
    this.activeModal.close();
  }
}
