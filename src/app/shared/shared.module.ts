import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// --- IMPORTA AQUÍ TODOS TUS COMPONENTES REUTILIZABLES ---
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';

// Array para no repetir código
const SHARED_COMPONENTS = [
  NavbarComponent,
  FilterBarComponent,
  ModalComponent,
  ProfileCardComponent,
  PaginationComponent,
  SearchBarComponent,
  PropertyCardComponent
];

@NgModule({
  // 1. Declaramos todos los componentes reutilizables aquí.
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  // 2. EXPORTAMOS todos los componentes para que otros módulos puedan usarlos.
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }