import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/data-structs/Medication';
import { HealthService } from 'src/app/services/health.service';

@Component({
  selector: 'app-medications-module',
  templateUrl: './medications-module.component.html',
  styleUrls: ['./medications-module.component.css']
})
export class MedicationsModuleComponent implements OnInit {

  medicationsList: Medication[];
  constructor(private healthService: HealthService) { }

  ngOnInit(): void {
    this.medicationsList = this.healthService.getAllMedications();
  }

}
