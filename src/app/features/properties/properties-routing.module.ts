import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';
import { RequestReservationComponent } from './components/request-reservation/request-reservation.component';

const routes: Routes = [ {
    path: '',
    component: HomePageComponent
  },
  // 2. ¡AÑADE ESTA NUEVA RUTA!
  // Cuando la URL sea 'properties/un-numero', se cargará PropertyDetailComponent.
  // Angular es lo suficientemente inteligente para saber que ':id' es un parámetro dinámico.
  {
    path: 'properties/:id',
    component: PropertyDetailComponent
  },
  { path: 'properties/:id/request', component: RequestReservationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule { }
