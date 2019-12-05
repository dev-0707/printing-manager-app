import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient } from 'selenium-webdriver/http';
import { MaterialModule } from '../../material/material.module';
import { HttpLoaderFactory } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/home/home.component';
import { SidenavListComponent } from '../../core/components/navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from '../../core/components/navigation/header/header.component';
import { LayoutComponent } from '../../core/components/layout/layout.component';
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        HomeComponent,
        SidenavListComponent,
        HeaderComponent,
        LayoutComponent, LocationComponent],
      imports: [
        MaterialModule,
        CommonModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [TranslateService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
