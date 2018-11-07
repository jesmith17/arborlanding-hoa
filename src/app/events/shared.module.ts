import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsComponent} from './events.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),

  ],
  declarations: [EventsComponent],
  exports: [EventsComponent]
})
export class SharedModule { }
