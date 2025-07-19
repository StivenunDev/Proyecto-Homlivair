import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }, { path: 'properties', loadChildren: () => import('./modules/properties/properties.module').then(m => m.PropertiesModule) }, { path: 'recervations', loadChildren: () => import('./modules/recervations/recervations.module').then(m => m.RecervationsModule) }, { path: 'recervations', loadChildren: () => import('./modules/reservations/reservations.module').then(m => m.ReservationsModule) }, { path: 'host', loadChildren: () => import('./modules/host/host.module').then(m => m.HostModule) }, { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
