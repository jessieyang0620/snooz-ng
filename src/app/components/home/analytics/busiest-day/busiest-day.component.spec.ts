import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusiestDayComponent } from './busiest-day.component';

describe('BusiestDayComponent', () => {
  let component: BusiestDayComponent;
  let fixture: ComponentFixture<BusiestDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusiestDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusiestDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
