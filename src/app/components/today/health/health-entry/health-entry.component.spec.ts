import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HealthEntryComponent} from './health-entry.component';

describe('HealthEntryComponent', () => {
    let component: HealthEntryComponent;
    let fixture: ComponentFixture<HealthEntryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HealthEntryComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HealthEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
