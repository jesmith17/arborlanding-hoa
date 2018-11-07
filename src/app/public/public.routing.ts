import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {PublicComponent} from './public.component';
import {PublicCalendarComponent} from './public-calendar/public-calendar.component';





const childRoutes: Routes = [
  { path: 'landing', component: HomeComponent},
  { path: 'events', component: PublicCalendarComponent, pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'register', component: SignupComponent},
  { path: '',  redirectTo: 'landing', pathMatch: 'full' }
];

const publicRoutes: Routes =[
  { path: 'public', component: PublicComponent, children: childRoutes},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(publicRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class PublicRoutingModule { }
