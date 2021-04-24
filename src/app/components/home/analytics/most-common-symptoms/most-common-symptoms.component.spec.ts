import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostCommonSymptomsComponent } from './most-common-symptoms.component';

describe('MostCommonSymptomsComponent', () => {
  let component: MostCommonSymptomsComponent;
  let fixture: ComponentFixture<MostCommonSymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostCommonSymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostCommonSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
