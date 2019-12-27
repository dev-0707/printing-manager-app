import { CommonComponentsModule } from 'common-components';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { MaterialModule } from '../material/material.module';
import { LocationComponent } from './location/location.component';
import { LoggerService, StaticInjectorService } from 'utils';

@NgModule({
  declarations: [LocationListComponent, LocationComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    MaterialModule
  ]
})
export class LocationModule {   constructor(private injector: Injector,
  private logger: LoggerService) {

this.logger.info('Sales Module initialised');

StaticInjectorService.setInjector(injector);
}
}
