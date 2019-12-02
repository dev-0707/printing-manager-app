import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LocationModule } from './locations/location.module';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './core/components/navigation/header/header.component';
import { SidenavListComponent } from './core/components/navigation/sidenav-list/sidenav-list.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { GlobalErrorHandler } from './error-handler';
import { HttpErrorInterceptor } from './core/http-interceptors/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    }),
    MaterialModule,
    LocationModule,
    LayoutModule,
    TranslateModule.forRoot(),
    // CoreModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
