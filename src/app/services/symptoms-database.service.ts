import {Injectable} from '@angular/core';

export enum SymtomDataTypes {
    PHYSICAL, MENTAL, MEDICATION, ILLNESS
}

@Injectable({
    providedIn: 'root'
})
export class SymptomsDatabaseService {
    private mentalSymptoms: string[] = ['depressed', 'anxious', 'happy'];
    private physicalSymptoms: string[] = ['nausea', 'headache', 'cough', 'fever'];
    private medications: string[] = ['lexapro', 'Tylenol', 'Ambien'];
    private illnesses: string[] = ['COVID-19', 'influenza', 'strep throat'];

    constructor() {
    }

    getMentalSymptoms(): string[] {
        return this.mentalSymptoms;
    }

    getPhysicalSymptoms(): string[] {
        return this.physicalSymptoms;
    }

    getMedications(): string[] {
        return this.medications;
    }

    addToDb(name: string, type: SymtomDataTypes): void {
        switch (type) {
            case SymtomDataTypes.MENTAL:
                this.mentalSymptoms.push(name);
                break;
            case SymtomDataTypes.PHYSICAL:
                this.physicalSymptoms.push(name);
                break;
            case SymtomDataTypes.MEDICATION:
                this.medications.push(name);
                break;
            case SymtomDataTypes.ILLNESS:
                this.illnesses.push(name);
                break;
        }
    }
}
