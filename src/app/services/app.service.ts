import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CalendarEvent} from '../models/calendar-event.model';
import {AuthService} from './auth.service';




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

  saveProfile(profile) {
    return this.http.put(`${environment.baseUrl}/users`, {user: profile});
  }

  getProfile(id: number) {
    return this.http.get(`${environment.baseUrl}/users/${id}`);
  }



}
