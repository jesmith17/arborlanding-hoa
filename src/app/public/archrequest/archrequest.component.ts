import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-archrequest',
  templateUrl: './archrequest.component.html',
  styleUrls: ['./archrequest.component.scss']
})
export class ArchrequestComponent implements OnInit {

  constructor(private element : ElementRef) { }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    navbar.children[0].classList.remove('navbar-transparent');
    navbar.children[0].children[0].classList.remove('navbar-transparent');
  }

}
