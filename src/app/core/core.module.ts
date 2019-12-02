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
import { environment } from '../../environments/environment';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';

// TODO
// import { throwIfAlreadyLoaded } from './module-import-guard';



@NgModule({
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),

    RouterModule  // There is no directive with "exportAs" set to "routerLinkActive ...
  ],
  declarations: [ HeaderComponent, SidenavListComponent ],
  exports: [ HeaderComponent, SidenavListComponent ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule,
              private translate: TranslateService,
              private logger: NGXLogger) {

    this.logger.info('Core Module initialised');

    // 'en-gb' -> 'en'
    const defaultLanguage = environment.defaultLanguage.split('-')[0];

    this.logger.info('Default Language: ' + defaultLanguage);
    this.logger.info('Local: ' + environment.defaultLanguage.split('-')[1]);

    translate.setDefaultLang(defaultLanguage);
    translate.use(defaultLanguage);

    // TODO
    // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}