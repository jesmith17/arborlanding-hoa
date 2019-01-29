import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../services/app.service';
import {CalendarEvent} from '../../models/calendar-event.model';

@Component({
  selector: 'app-resident-events',
  templateUrl: './resident-events.component.html',
  styleUrls: ['./resident-events.component.scss']
})
export class ResidentEventsComponent implements OnInit {

  startDate: NgbDateStruct;
  endDate: NgbDateStruct;
  startTime: {hour: 13, minute: 0};
  endTime: {hour: 13, minute: 0};
  reminderTime: {hour: 13, minute: 0};
  event: CalendarEvent = new CalendarEvent();

  @ViewChild('addEventContent')
  eventModalContent: TemplateRef<any>;



  constructor(private modal: NgbModal, private appService: AppService) {}

  ngOnInit() {
  }


  addEvent() {
    this.modal.dismissAll();
    this.event.startDate = new Date(this.startDate['year'], this.startDate['month'], this.startDate['day'], this.startTime['hour'], this.startTime['minute']);
    this.event.endDate = new Date(this.endDate['year'], this.endDate['month'], this.endDate['day'], this.endTime['hour'], this.endTime['minute']);
    this.appService.saveEvent(this.event).subscribe(data =>  console.log('I completed'));
  }

  open(content) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }


}
