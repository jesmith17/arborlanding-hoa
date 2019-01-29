import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {PublicModule} from './public/public.module';
import {ResidentModule} from './resident/resident.module';
import {AppRoutingModule} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './events/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './services/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import {AppService} from './services/app.service';
import {ClipboardModule} from 'ngx-clipboard';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    ResidentModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgbModule.forRoot(),
    ClipboardModule

  ],
  providers: [AuthService, HttpClientModule, httpInterceptorProviders, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
