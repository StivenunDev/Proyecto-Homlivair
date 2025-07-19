import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { HostComponent } from './host.component';
import { ManagePropertiesComponent } from './manage-properties/manage-properties.component';
import { ManageReservationsComponent } from './manage-reservations/manage-reservations.component';
import { PaymentsComponent } from './payments/payments.component';
import { RentalsComponent } from './rentals/rentals.component';


@NgModule({
  declarations: [
    HostComponent,
    ManagePropertiesComponent,
    ManageReservationsComponent,
    PaymentsComponent,
    RentalsComponent
  ],
  imports: [
    CommonModule,
    HostRoutingModule
  ]
})
export class HostModule { }
