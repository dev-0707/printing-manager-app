import { CommonComponentsModule } from 'common-components';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { NGXLogger } from 'ngx-logger';

// TODO
import { environment } from '@env/environment';

import { HeaderComponent } from './components/navigation/header/header.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { UtilsModule } from 'utils';
import { NavComponent } from './components/nav/nav.component';


// TODO
// import { throwIfAlreadyLoaded } from './module-import-guard';



@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    CommonComponentsModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    UtilsModule.forRoot(environment),
    RouterModule  // There is no directive with "exportAs" set to "routerLinkActive ...
  ],
  declarations: [ HeaderComponent, NavComponent ],
  exports: [ HeaderComponent, NavComponent ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule,
              private translate: TranslateService,
              private logger: NGXLogger) {

    this.logger.debug('Core Module initialised');

    // 'en-gb' -> 'en'
    const defaultLanguage = environment.defaultLanguage.split('-')[0];

    this.logger.debug('Default Language: ' + defaultLanguage);
    this.logger.debug('Local: ' + environment.defaultLanguage.split('-')[1]);

    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);

    // TODO
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}