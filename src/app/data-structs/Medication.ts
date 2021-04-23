export enum DOSAGE_UNIT {
    ml, mg, g
}
export interface Medication {
    name: string,
    dosage: number,
    unit: DOSAGE_UNIT;
    comment?: string;
}