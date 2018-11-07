import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './public/home/home.component';
import {SigninComponent} from './public/signin/signin.component';
import {SignupComponent} from './public/signup/signup.component';


const routes: Routes = [
  { path: 'public/landing', component: HomeComponent},
  { path: '', redirectTo: 'public/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
