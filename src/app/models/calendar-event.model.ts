import {JwtHelperService} from '@auth0/angular-jwt';

export class CalendarEvent {

  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  location: string;
  url: URL;
  reminder_date: Date;

}
