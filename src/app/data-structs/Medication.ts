export enum DOSAGE_UNIT {
    ml, mg, g
}
export interface Medication {
    id: number,
    name: string,
    dosage: number,
    unit: DOSAGE_UNIT;
    comment?: string;
}