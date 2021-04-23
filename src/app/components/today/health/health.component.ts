import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Medication } from 'src/app/data-structs/Medication';
import { Symptom } from 'src/app/data-structs/Symptom';
import { HealthService } from 'src/app/services/health.service';
import { MedicationFormComponent } from '../../medication-form/medication-form.component';
import { SymptomFormComponent } from '../../symptom-form/symptom-form.component';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  symptomsList: Symptom[];
  medicationsList: Medication[];
  constructor( private healthService: HealthService,
    private modalService: NgbModal) { }

ngOnInit(): void {
  // this.tasksList = this.tasksService.getAllTasks();
  // console.log(this.tasksList.toString());
  this.symptomsList = this.healthService.getAllSymptoms();
  this.medicationsList = this.healthService.getAllMedications();
  // this.healthService.__symptoms.subscribe(syms => {
  //   for(let sym of syms.values()) {
  //     this.symptomsList.push(sym);
  //   }
  // })
}

openSymptomModal(): void {
  const modalRef = this.modalService.open(SymptomFormComponent);
}
openMedicationModal(): void {
  const modalRef = this.modalService.open(MedicationFormComponent);
}
}
