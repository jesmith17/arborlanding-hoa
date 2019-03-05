import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {CalendarEvent} from '../../models/calendar-event.model';
import {AppService} from '../../services/app.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  events: CalendarEvent[] = [];



  constructor(public appService: AppService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.appService.getEvents().subscribe( (events: any[]) => {
      for(const event of events){
        this.events.push(new CalendarEvent(event.title, event.start_date, event.end_date, event.description,
          event.location, event.url, event.reminder_date ));
      }
    });
  }






}
