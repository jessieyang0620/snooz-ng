import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MedicationsModuleComponent} from './medications-module.component';

describe('MedicationsModuleComponent', () => {
    let component: MedicationsModuleComponent;
    let fixture: ComponentFixture<MedicationsModuleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MedicationsModuleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MedicationsModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
