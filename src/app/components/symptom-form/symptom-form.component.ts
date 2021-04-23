import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-symptom-form',
  templateUrl: './symptom-form.component.html',
  styleUrls: ['./symptom-form.component.css']
})
export class SymptomFormComponent implements OnInit {

  severity: string[] = ['1 (Lowest)', '2', '3', '4', '5 (Highest)'];
  type: string[] = ['Mental', 'Physical'];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  addSymptom(): void {}

}
