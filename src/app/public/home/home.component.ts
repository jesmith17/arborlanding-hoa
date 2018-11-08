import { Component,  OnInit, ViewChild} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor() {}


  ngOnInit() {

  }

}
