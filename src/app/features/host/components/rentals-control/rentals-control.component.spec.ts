import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalsControlComponent } from './rentals-control.component';

describe('RentalsControlComponent', () => {
  let component: RentalsControlComponent;
  let fixture: ComponentFixture<RentalsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalsControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
