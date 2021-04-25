import {Component, OnInit} from '@angular/core';
import {Symptom} from 'src/app/data-structs/Symptom';
import {HealthService} from 'src/app/services/health.service';

@Component({
    selector: 'app-symptoms-module',
    templateUrl: './symptoms-module.component.html',
    styleUrls: ['./symptoms-module.component.css']
})
export class SymptomsModuleComponent implements OnInit {

    symptomsList: Symptom[];

    constructor(private healthService: HealthService) {
    }

    ngOnInit(): void {
        this.symptomsList = this.healthService.getAllSymptoms();
    }

}
