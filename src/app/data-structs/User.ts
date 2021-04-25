import {Day} from './Day';

export enum GENDER {
    MALE, FEMALE, NONBINARY
}

export enum NOTIFICATION_SETTINGS {
    NONE, MORNING, NOON, NIGHT
}

export interface User {
    firstName: string;
    lastName: string;
    dob: Date;
    username: string;
    password: string;
    gender?: GENDER;
    notificationSettings?: NOTIFICATION_SETTINGS;

    entries: Day[];
}
