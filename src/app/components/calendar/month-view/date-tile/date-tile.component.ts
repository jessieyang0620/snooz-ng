import {Component, Input, OnInit} from '@angular/core';
import {Medication} from 'src/app/data-structs/Medication';
import {Symptom} from 'src/app/data-structs/Symptom';
import {DayService} from 'src/app/services/day.service';
import {HealthService} from 'src/app/services/health.service';

@Component({
    selector: 'app-date-tile',
    templateUrl: './date-tile.component.html',
    styleUrls: ['./date-tile.component.css']
})
export class DateTileComponent implements OnInit {

    @Input() dd: number;
    @Input() today: boolean;

    symptoms: Symptom[];
    medications: Medication[];

    constructor(private daysService: DayService,
                private healthService: HealthService) {
    }

    ngOnInit(): void {
        if (this.today) {
            this.symptoms = this.healthService.getAllSymptoms();
            this.medications = this.healthService.getAllMedications();
        } else {
            this.symptoms = this.daysService.getDay(this.dd).symptoms;
            this.medications = this.daysService.getDay(this.dd).medications;
        }

    }
}
