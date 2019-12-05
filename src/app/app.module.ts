import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LocationModule } from './locations/location.module';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { GlobalErrorHandler } from './error-handler';
import { HttpErrorInterceptor } from './core/http-interceptors/error-interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    }),
    MaterialModule,
    LocationModule,
    LayoutModule,
    // TranslateModule.forRoot(),
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
