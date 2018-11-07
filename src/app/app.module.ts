import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {PublicModule} from './public/public.module';
import {ResidentModule} from './resident/resident.module';
import {AppRoutingModule} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from './events/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    SharedModule,
    NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
