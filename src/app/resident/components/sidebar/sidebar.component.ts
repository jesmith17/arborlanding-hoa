import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/resident/home', title: 'Home',  icon: 'business_globe', class: '' },
    { path: '/resident/events', title: 'Event Calendar',  icon: 'ui-1_calendar-60', class: '' },
    { path: '/resident/profile', title: 'Profile',  icon:'users_circle-08', class: '' },
    { path: '/resident/arch', title: 'Architecture Requests',  icon:'shopping_shop', class: '' }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
