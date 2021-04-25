import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MedicationsEntryComponent} from './medications-entry.component';

describe('MedicationsEntryComponent', () => {
    let component: MedicationsEntryComponent;
    let fixture: ComponentFixture<MedicationsEntryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MedicationsEntryComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MedicationsEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
