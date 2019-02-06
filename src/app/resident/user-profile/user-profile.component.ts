import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AppService} from '../../services/app.service';
import {User} from '../../models/user.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;

  userProfileForm = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    position: ['', Validators.required],
    bio: ['']
  });




  constructor(private fb: FormBuilder, private appService: AppService, private authService: AuthService) {
    this.user = authService.token;

  }

  ngOnInit() {

    this.appService.getProfile(this.user.id).subscribe(data => {
      this.userProfileForm.get('first_name').setValue(data['first_name']);
      this.userProfileForm.get('last_name').setValue(data['last_name']);
      this.userProfileForm.get('street').setValue(data['street']);
      this.userProfileForm.get('email').setValue(data['email']);
      this.userProfileForm.get('city').setValue(data['city']);
      this.userProfileForm.get('state').setValue(data['state']);
      this.userProfileForm.get('zip').setValue(data['zip']);
      this.userProfileForm.get('email').setValue(data['email']);
      this.userProfileForm.get('bio').setValue(data['bio']);
    });

  }



  editProfile() {
    console.log('I tried to save the profile');
    this.appService.saveProfile(this.userProfileForm.value).subscribe(data =>  console.log('I completed'));
  }



}
