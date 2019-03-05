import { Component,  OnInit, ViewChild} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {Subscription} from 'rxjs';
import {AppService} from '../../services/app.service';
import {CalendarEvent} from '../../models/calendar-event.model';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  events: CalendarEvent[] = [];
  news: any[] = [];

  contactForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]]
  });

  constructor(private appService: AppService, private fb: FormBuilder) {}


  ngOnInit() {
    this.appService.getEvents().subscribe( (events: any[]) => {
      for(const event of events){
        this.events.push(new CalendarEvent(event.title, event.start_date, event.end_date, event.description,
          event.location, event.url, event.reminder_date ));
      }
    });
    this.appService.getNews().subscribe( ( news: any[]) => {
      this.news = news;
    });
  }

  addSubscriber() {
    this.appService.addSubscriber(this.contactForm.get('firstName').value,
      this.contactForm.get('lastName').value, this.contactForm.get('email').value).subscribe(data => {
      console.log('it works');
    });
  }

}
