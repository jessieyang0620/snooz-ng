import { Symptom } from "./Symptom";
import { Task, Date } from "./Task";
export interface Day {
    date: Date,
    tasks: Task[],
    symptoms: Symptom[]
}