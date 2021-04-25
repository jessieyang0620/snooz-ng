import {TestBed} from '@angular/core/testing';

import {HealthObservableService} from './health-observable.service';

describe('HealthObservableService', () => {
    let service: HealthObservableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HealthObservableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
