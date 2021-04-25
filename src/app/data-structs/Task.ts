import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

export interface Task {
    title: string;
    fromTime?: NgbTimeStruct;
    fromDate?: NgbDateStruct;
    toTime?: NgbTimeStruct;
    toDate?: NgbDateStruct;
    dueTime?: NgbTimeStruct;
    dueDate?: NgbDateStruct;
    category?: string;
    complete: boolean;
}
