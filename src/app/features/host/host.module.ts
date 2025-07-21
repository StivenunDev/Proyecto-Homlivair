import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Necesario para *ngIf, *ngFor, etc.
import { RouterModule } from '@angular/router'; // <-- Necesario para routerLink, etc.

import { HostRoutingModule } from './host-routing.module';

// --- Componentes de este Módulo ---
// Estos son los componentes que hemos construido juntos. Son standalone.

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservationsControlComponent } from './components/reservation-control/reservation-control.component';
import { ManagePropertiesComponent } from './components/manage-properties/manage-properties.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PaymentsControlComponent } from './components/payments-control/payments-control.component';


@NgModule({
  // 'declarations' debe estar VACÍO porque todos nuestros componentes son standalone.
  declarations: [

  
    
  ],
  imports: [
    // Módulos básicos que necesita este feature
    CommonModule,
    HostRoutingModule,
    RouterModule,

    // Importamos los componentes standalone directamente, como si fueran módulos.
    DashboardComponent,
    ReservationsControlComponent,
    ManagePropertiesComponent,
    AddPropertyComponent,
    PaymentsControlComponent
  ]
})
export class HostModule { }