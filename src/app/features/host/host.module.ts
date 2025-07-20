import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagePropertiesComponent } from './components/manage-properties/manage-properties.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ManagePropertiesComponent
  ],
  imports: [
    CommonModule,
    HostRoutingModule
  ]
})
export class HostModule { }
