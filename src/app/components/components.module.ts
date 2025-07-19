import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes reutilizables
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PropertyCardComponent } from './property-card/property-card.component';

import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        NavbarComponent,
        PropertyCardComponent,
        FilterBarComponent,
        ReservationComponent,
        SearchBarComponent,
        ProfileCardComponent,
        PaginationComponent,
        ModalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NavbarComponent,
        FilterBarComponent,
        PropertyCardComponent,
        SearchBarComponent,
        ReservationComponent,
        ProfileCardComponent,
        PaginationComponent,
        ModalComponent
    ]
})
export class SharedModule {}