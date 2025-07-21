import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';


const routes: Routes = [  // Ruta para la configuración de la cuenta
  { path: 'account-settings', component: AccountSettingsComponent },
  
  // Redirigimos por defecto a la configuración
  { path: '', redirectTo: 'account-settings', pathMatch: 'full' },
    { path: 'trips', component: MyTripsComponent },
  
  // Ahora redirigimos por defecto a la página de viajes
  { path: '', redirectTo: 'trips', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
