import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../services/app.service';
import {CalendarEvent} from '../../models/calendar-event.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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



  constructor(private modal: NgbModal, private appService: AppService, private fb: FormBuilder) {}

  addEventForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    reminderDate: [''],
    reminderTime: [''],
    location: ['', Validators.required]
  });

  ngOnInit() {
  }


  addEvent() {
    const form = this.addEventForm;
    this.event = form.value;
    this.modal.dismissAll();
    this.event.startDate = new Date(form.get('startDate')['year'], form.get('startDate')['month'], form.get('startDate')['day'], form.get('startTime')['hour'], form.get('startTime')['minute']);
    this.event.endDate = new Date(form.get('endDate')['year'], form.get('endDate')['month'], form.get('endDate')['day'], form.get('endTime')['hour'], form.get('endTime')['minute']);
    this.appService.saveEvent(this.event).subscribe(data =>  console.log('I completed'));
  }

  open(content) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
    }, (reason) => {
    });
  }






}
