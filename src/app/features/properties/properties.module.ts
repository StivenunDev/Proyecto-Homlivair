import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PropertyDetailComponent } from './components/property-detail/property-detail.component';


@NgModule({
  declarations: [
    HomePageComponent,
    PropertyDetailComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
