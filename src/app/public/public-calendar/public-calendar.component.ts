import {Component, ElementRef, OnInit, Renderer} from '@angular/core';
import { EventsComponent} from '../../events/events.component';

@Component({
  selector: 'app-public-calendar',
  templateUrl: './public-calendar.component.html',
  styleUrls: ['./public-calendar.component.scss']
})
export class PublicCalendarComponent implements OnInit {

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    navbar.children[0].classList.remove('navbar-transparent');
    navbar.children[0].children[0].classList.remove('navbar-transparent');
  }

}
