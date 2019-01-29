import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CalendarEvent} from 'angular-calendar';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${environment.baseUrl}/calendars`);
  }

  saveEvent(event: CalendarEvent) {
    return this.http.post(`${environment.baseUrl}/calendars`, {calendar: event});
  }

}
