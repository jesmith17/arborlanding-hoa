import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentEventsComponent } from './resident-events.component';

describe('ResidentEventsComponent', () => {
  let component: ResidentEventsComponent;
  let fixture: ComponentFixture<ResidentEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
