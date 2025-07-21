import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // --- 1. ESTA ES LA RUTA MÁS IMPORTANTE ---
  // Cuando la URL esté vacía ('/'), carga el módulo de propiedades.
  {
    path: '',
    loadChildren: () => import('./features/properties/properties.module').then(m => m.PropertiesModule)
  },
  
  // --- El resto de tus rutas ---
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'host',
    loadChildren: () => import('./features/host/host.module').then(m => m.HostModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module').then(m => m.UserModule)
  },
  
  // Si la URL no coincide con nada, redirige a la página de inicio.
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }