import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomInfoComponent } from './symptom-info.component';

describe('SymptomInfoComponent', () => {
  let component: SymptomInfoComponent;
  let fixture: ComponentFixture<SymptomInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
