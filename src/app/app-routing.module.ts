import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }, { path: 'properties', loadChildren: () => import('./features/properties/properties.module').then(m => m.PropertiesModule) }, { path: 'host', loadChildren: () => import('./features/host/host.module').then(m => m.HostModule) }, { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
