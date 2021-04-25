import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSymptomFormComponent } from './edit-symptom-form.component';

describe('EditSymptomFormComponent', () => {
  let component: EditSymptomFormComponent;
  let fixture: ComponentFixture<EditSymptomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSymptomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSymptomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
