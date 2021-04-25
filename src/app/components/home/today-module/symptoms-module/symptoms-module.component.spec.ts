import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SymptomsModuleComponent} from './symptoms-module.component';

describe('SymptomsModuleComponent', () => {
    let component: SymptomsModuleComponent;
    let fixture: ComponentFixture<SymptomsModuleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SymptomsModuleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SymptomsModuleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
