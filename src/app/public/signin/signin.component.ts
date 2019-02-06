import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements OnInit, OnDestroy {

  public email: string;
  public password: string;
  public error: string;


  signInForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });


  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }





  signin() {
    this.authService.login(this.signInForm.get('email').value, this.signInForm.get('password').value)
      .subscribe(success => {
          if (success) {
            this.router.navigate(['/resident/home']);
          }
        },
        error => {
        console.log('login failed');
          this.error = 'Username or password is incorrect';
        });

  }

}
