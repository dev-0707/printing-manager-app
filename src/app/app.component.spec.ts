import { LayoutComponent } from './core/components/layout/layout.component';
import { HeaderComponent } from './core/components/navigation/header/header.component';
import { SidenavListComponent } from './core/components/navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from './material/material.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from './core/core.module';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HomeComponent } from './home/home.component';
import { LocationListComponent } from './locations/location-list/location-list.component';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common'
import { of } from 'rxjs';

const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_IT = require('../assets/i18n/it.json');

describe('AppComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        LocationListComponent,
        SidenavListComponent,
        HeaderComponent,
        LayoutComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [TranslateService, {provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'Printing Manager Dashboard'`, async(() => {
  //   spyOn(translate, 'getBrowserLang').and.returnValue('en');
  //   http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
  //   http.expectNone('/assets/i18n/fr.json');

  //   // Finally, assert that there are no outstanding requests.
  //   http.verify();
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual(TRANSLATIONS_EN.APP_NAME);
  // }));
});


