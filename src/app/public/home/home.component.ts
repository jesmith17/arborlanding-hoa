import { Component, ElementRef, Inject, OnInit, Renderer, ViewChild} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {Subscription} from 'rxjs';
import { DOCUMENT } from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import {filter} from 'rxjs/internal/operators';

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
