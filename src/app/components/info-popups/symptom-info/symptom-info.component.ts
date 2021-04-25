import {Component, Input, OnInit} from '@angular/core';
import {Symptom} from 'src/app/data-structs/Symptom';

@Component({
    selector: 'app-symptom-info',
    templateUrl: './symptom-info.component.html',
    styleUrls: ['./symptom-info.component.css']
})
export class SymptomInfoComponent implements OnInit {

    @Input() symptom: Symptom;

    constructor() {
    }

    ngOnInit(): void {
    }

}
