import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationInfoComponent } from './medication-info.component';

describe('MedicationInfoComponent', () => {
  let component: MedicationInfoComponent;
  let fixture: ComponentFixture<MedicationInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
