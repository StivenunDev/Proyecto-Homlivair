import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { TripsComponent } from './trips/trips.component';
import { TripsDetailsComponent } from './trips-details/trips-details.component';


@NgModule({
  declarations: [
    UserComponent,
    UserProfileComponent,
    AccountSettingsComponent,
    PaymentMethodsComponent,
    TripsComponent,
    TripsDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
