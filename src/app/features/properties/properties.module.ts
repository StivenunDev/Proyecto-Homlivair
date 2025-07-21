import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { RequestReservationComponent } from './components/request-reservation/request-reservation.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    SharedModule,
    RequestReservationComponent
  ]
})
export class PropertiesModule { }
