import {Medication} from './Medication';
import {Symptom} from './Symptom';
import {Task} from './Task';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export interface Day {
    date: NgbDateStruct;
    tasks: Task[];
    symptoms: Symptom[];
    medications: Medication[];
}
