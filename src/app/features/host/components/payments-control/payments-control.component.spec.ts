import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsControlComponent } from './payments-control.component';

describe('PaymentsControlComponent', () => {
  let component: PaymentsControlComponent;
  let fixture: ComponentFixture<PaymentsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentsControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
