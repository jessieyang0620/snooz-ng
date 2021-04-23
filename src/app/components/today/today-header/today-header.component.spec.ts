import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayHeaderComponent } from './today-header.component';

describe('TodayHeaderComponent', () => {
  let component: TodayHeaderComponent;
  let fixture: ComponentFixture<TodayHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
