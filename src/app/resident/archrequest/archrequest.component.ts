import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-archrequest',
  templateUrl: './archrequest.component.html',
  styleUrls: ['./archrequest.component.scss']
})
export class ArchrequestComponent implements OnInit {

  requests = [];

  constructor(private appService: AppService ) { }

  ngOnInit() {

    this.appService.getArchRequests().subscribe( (data: any[]) => {
      this.requests = data;
    });

  }

}
