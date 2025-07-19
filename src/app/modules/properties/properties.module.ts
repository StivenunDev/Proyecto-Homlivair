import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';

import { PropertyDetailPageComponent } from './property-detail-page/property-detail-page.component';

import { AddAtmosphereComponent } from './add-atmosphere/add-atmosphere.component';


@NgModule({
  declarations: [
    PropertiesComponent,
    PropertyDetailPageComponent,
    AddAtmosphereComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
