import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservationsControlComponent } from './components/reservation-control/reservation-control.component';
import { ManagePropertiesComponent } from './components/manage-properties/manage-properties.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PaymentsControlComponent } from './components/payments-control/payments-control.component';

const routes: Routes = [  {
    path: '',
    component: DashboardComponent,
    // Definimos las rutas "hijas" que se mostrarán dentro del <router-outlet> del dashboard
    children: [
      { path: 'reservations', component: ReservationsControlComponent },
      // Aquí irán las rutas para 'properties', 'payments', etc.
      // ¡NUEVA RUTA!
      { path: 'properties', component: ManagePropertiesComponent },
      // Redirigimos por defecto a la pestaña de reservas
      { path: '', redirectTo: 'properties', pathMatch: 'full' },

      { path: 'properties/new', component: AddPropertyComponent },
      
      { path: '', redirectTo: 'properties', pathMatch: 'full' },

      { path: 'payments', component: PaymentsControlComponent },
      
      { path: '', redirectTo: 'properties', pathMatch: 'full' }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
