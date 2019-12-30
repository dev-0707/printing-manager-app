import { CoreModule, HttpLoaderFactory } from './../core/core.module';
import { DynamicFormsModule } from './../../../projects/dynamic-forms/src/lib/dynamic-forms.module';
import { CommonComponentsModule } from 'common-components';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { MaterialModule } from '../material/material.module';
import { LocationComponent } from './location/location.component';
import { LoggerService } from 'utils';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

@NgModule({
  declarations: [LocationListComponent, LocationComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    MaterialModule,
    DynamicFormsModule,
    TranslateModule.forChild()
  ]
})
export class LocationModule {
    constructor(private injector: Injector,
      private logger: LoggerService) {

      this.logger.debug('Location Module initialised');

    }
}
