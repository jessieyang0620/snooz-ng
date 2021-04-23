import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Illness } from '../data-structs/Illness';
import { DOSAGE_UNIT, Medication } from '../data-structs/Medication';
import { Symptom, SYMPTOM_TYPE } from '../data-structs/Symptom';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  private symptoms: Map<string, Symptom> = new Map<string, Symptom>();

  private medications: Map<string, Medication> = new Map<string, Medication>();

  private illnesses: Map<number, Illness> = new Map<number, Illness>();

  constructor() { 
    //init values for demo/presentation
    this.symptoms.set('depressed', {name: 'depressed', 
                                    comments:'i hate it here', 
                                    severity: 5, 
                                    type: SYMPTOM_TYPE.MENTAL});
    this.symptoms.set('headache', {name: 'headache', 
                                   comments:'help', 
                                   severity: 2, 
                                   type: SYMPTOM_TYPE.PHYSICAL});

    this.medications.set('tylenol', {name: 'Tylenol', dosage: 500, unit: DOSAGE_UNIT.mg, comment: "for headache"});}

  // note lmao rip this doesn't handle duplicates well fix later
  addSymptom(name: string, comments: string, severity: number, type: SYMPTOM_TYPE): void {
    this.symptoms.set(name, {name: name, comments: comments, severity: severity, type: type});
  }
  updateSymptom(name: string, comments: string, severity: number, type: SYMPTOM_TYPE): void {
    if (this.symptoms.has(name)) {
      this.symptoms.delete(name);
      this.addSymptom(name, comments, severity, type);
    }
  }
  deleteSymptom(name: string): void {
    if (this.symptoms.has(name)) {
      this.symptoms.delete(name);
    }
  }
  getSymptom(name: string): Symptom {
    if (this.symptoms.has(name)) {
      return this.symptoms.get(name);
    }
    throw new Error('this symptom does not exist');
  }
  getAllSymptoms(): Symptom[] {
    let temp: Symptom[] = [];
    for (let s of this.symptoms.values()) {
      temp.push(s);
    } 
    return temp;
  }

  addMedication(name: string, dosage: number, unit: DOSAGE_UNIT, comment?: string): void {
    this.medications.set(name, {name: name, dosage: dosage, unit: unit, comment: comment});
  }
  updateMedication(name: string, dosage: number, unit: DOSAGE_UNIT, comment: string): void {
    if (this.medications.has(name)) {
      this.medications.delete(name);
      this.addMedication(name, dosage, unit, comment);
    }
  }
  deleteMedication(name: string): void {
    if (this.medications.has(name)) {
      this.medications.delete(name);
    }
  }
  getMedication(name: string): Medication {
    if (this.medications.has(name)) {
      return this.medications.get(name);
    }
    throw Error('this medication does not exist');
  }
  getAllMedications(): Medication[] {
    let temp: Medication[] = [];
    for (let m of this.medications.values()) {
      temp.push(m);
    }
    return temp;
  }

  // note add illness CRUD
}
