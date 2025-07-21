import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MyTripsComponent } from './components/my-trips/my-trips.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    AccountSettingsComponent,
    MyTripsComponent
  ]
})
export class UserModule { }
