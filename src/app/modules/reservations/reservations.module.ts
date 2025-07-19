import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';


@NgModule({
  declarations: [
    ReservationsComponent,
    CreateReservationComponent,
    ReservationDetailsComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
