import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from '../resident/home/home.component';
import {ResidentComponent} from './resident.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ResidentEventsComponent} from './resident-events/resident-events.component';
import {ArchrequestComponent} from './archrequest/archrequest.component';


const childRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'events', component: ResidentEventsComponent, pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent },
  { path: 'arch', component: ArchrequestComponent},
  { path: '',  redirectTo: 'home', pathMatch: 'full' }


];


const residentRoutes: Routes = [
  { path: 'resident', component: ResidentComponent, children: childRoutes},
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(residentRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class ResidentRoutingModule { }
