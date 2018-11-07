import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public.routing';
import {NavbarComponent} from './navbar/navbar.component';
import {ScrollSpyModule} from 'ngx-scrollspy';
import { PublicComponent } from './public.component';
import { PublicCalendarComponent } from './public-calendar/public-calendar.component';
import {SharedModule} from '../events/shared.module';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SignoutComponent} from './signout/signout.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    ScrollSpyModule.forRoot(),
  ],
  declarations: [HomeComponent, NavbarComponent, PublicComponent, PublicCalendarComponent,
    SigninComponent, SignupComponent, SignoutComponent]
})
export class PublicModule { }
