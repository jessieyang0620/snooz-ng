import { Time } from "@angular/common";

export interface Date {
    month: number,
    day: number,
    year: number
}
export interface Task {
    id: number,
    title: string,
    fromTime?: Time,
    fromDate?: Date,
    toTime?: Time,
    toDate?: Date,
    dueTime?: Time,
    dueDate?: Date,
    category?: string,
    complete: boolean
}