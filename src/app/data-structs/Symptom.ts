export enum SYMPTOM_TYPE {
    MENTAL, PHYSICAL
}

export interface Symptom {
    name: string;
    comments?: string;
    severity: number;
    type: SYMPTOM_TYPE;
}
