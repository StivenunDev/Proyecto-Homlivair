import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';


@NgModule({
  declarations: [
    AccountSettingsComponent,
    MyTripsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
