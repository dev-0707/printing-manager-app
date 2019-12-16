import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { MaterialModule } from '../material/material.module';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [LocationListComponent, LocationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LocationModule { }
