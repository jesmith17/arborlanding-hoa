import {JwtHelperService} from '@auth0/angular-jwt';

export class CalendarEvent {

  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  location: string;
  url: URL;
  reminderDate: Date;



  constructor(title?: string, start_date?: Date, end_date?: Date, description?: string, location?: string, url?: URL, reminder_date?: Date) {
    this.title = title;
    this.startDate = start_date;
    this.endDate = end_date;
    this.description = description;
    this.location = location;
    this.url = url;
    this.reminderDate = reminder_date
  }


}
