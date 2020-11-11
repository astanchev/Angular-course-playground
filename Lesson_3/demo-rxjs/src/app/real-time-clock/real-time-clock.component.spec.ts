import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeClockComponent } from './real-time-clock.component';

describe('RealTimeClockComponent', () => {
  let component: RealTimeClockComponent;
  let fixture: ComponentFixture<RealTimeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
