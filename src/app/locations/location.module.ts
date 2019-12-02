import { LocationService } from './locations/service/location.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './locations/location.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LocationModule { }
