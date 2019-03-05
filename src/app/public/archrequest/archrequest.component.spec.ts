import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchrequestComponent } from './archrequest.component';

describe('ArchrequestComponent', () => {
  let component: ArchrequestComponent;
  let fixture: ComponentFixture<ArchrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
