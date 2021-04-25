import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Day} from 'src/app/data-structs/Day';
import {Medication} from 'src/app/data-structs/Medication';
import {Symptom} from 'src/app/data-structs/Symptom';
import {Task} from 'src/app/data-structs/Task';
import {DayService} from 'src/app/services/day.service';
import {EditMedicationComponent} from '../../edit-popups/edit-medication/edit-medication.component';
import {EditSymptomComponent} from '../../edit-popups/edit-symptom/edit-symptom.component';
import {EditTaskComponent} from '../../edit-popups/edit-task/edit-task.component';
import {MedicationFormComponent} from '../../forms/medication-form/medication-form.component';
import {SymptomFormComponent} from '../../forms/symptom-form/symptom-form.component';
import {TaskFormComponent} from '../../forms/task-form/task-form.component';

export enum Modal_Opts {
    addSymptom, addMedication, addTask, editSymptom, editMedication, editTask
}

@Component({
    selector: 'app-day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

    isEditing: boolean = false;
    day: Day;
    @Input() dd: number;
    @Input() mm: number;
    @Input() yyyy: number;

    constructor(public activeModal: NgbActiveModal,
                private dayService: DayService,
                private modalService: NgbModal) {
    }

    ngOnInit(): void {
        this.day = this.dayService.getDay(this.dd);
    }

    getMonth(): string {
        switch (this.mm) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            default:
                return 'N/a';
        }
    }

    getTasks(): Task[] {
        return this.day.tasks;
    }

    deleteTask(t: Task) {
        this.day.tasks.forEach((task, index) => {
            if (task == t) {
                this.day.tasks.splice(index, 1);
            }
        });
    }

    getSymptoms(): Symptom[] {
        return this.day.symptoms;
    }

    deleteSymptoms(s: Symptom) {
        this.day.symptoms.forEach((sym, index) => {
            if (sym == s) {
                this.day.symptoms.splice(index, 1);
            }
        });
    }

    getMedications(): Medication[] {
        return this.day.medications;
    }

    deleteMedications(m: Medication) {
        this.day.medications.forEach((med, index) => {
            if (med == m) {
                this.day.medications.splice(index, 1);
            }
        });
    }

    toggleEdit(): void {
        this.isEditing = !this.isEditing;
    }

    openModal(opt: Modal_Opts, obj): void {
        if (this.isEditing) {
            let modalRef;
            switch (opt) {
                case Modal_Opts.addMedication:
                    modalRef = this.modalService.open(MedicationFormComponent);
                    break;
                case Modal_Opts.addSymptom:
                    modalRef = this.modalService.open(SymptomFormComponent);
                    break;
                case Modal_Opts.addTask:
                    modalRef = this.modalService.open(TaskFormComponent);
                    break;
                case Modal_Opts.editMedication:
                    modalRef = this.modalService.open(EditMedicationComponent);
                    modalRef.componentInstance.med = obj;
                    modalRef.componentInstance.day = this.day;
                    break;
                case Modal_Opts.editSymptom:
                    console.log(JSON.stringify(obj));
                    modalRef = this.modalService.open(EditSymptomComponent);
                    modalRef.componentInstance.sym = obj;
                    modalRef.componentInstance.day = this.day;
                    break;
                case Modal_Opts.editTask:
                    modalRef = this.modalService.open(EditTaskComponent);
                    modalRef.componentInstance.task = obj;
                    modalRef.componentInstance.day = this.day;
                    break;
            }

        }
    }
}
