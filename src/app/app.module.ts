import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PropertyCardComponent,
    FilterBarComponent,
    ModalComponent,
    ReservationComponent,
    ProfileCardComponent,
    PaginationComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
