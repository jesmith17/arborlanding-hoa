import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ResidentRoutingModule } from './resident.routing';
import {ComponentsModule} from './components/components.module';
import {ResidentComponent} from './resident.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {SharedModule} from '../events/shared.module';
import {ResidentEventsComponent} from './resident-events/resident-events.component';
import { ArchrequestComponent } from './archrequest/archrequest.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  imports: [
    CommonModule,
    ResidentRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule
  ],
  declarations: [HomeComponent, ResidentComponent, UserProfileComponent, ResidentEventsComponent, ArchrequestComponent]
})
export class ResidentModule { }
