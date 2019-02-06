import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import {Response} from '@angular/http';


import {User} from '../models/user.model';
import {map, tap} from 'rxjs/operators';







@Injectable()
export class AuthService {

  public token: User ;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser;
  }



  login(username: string, password: string): Observable<boolean> {
    const expandedHeaders = this.prepareHeader();
    return this.http.post(environment.baseUrl + '/login', {user: {email: username, password: password}}, expandedHeaders)
      .pipe(
        map((resp: any) => {
          const headers = resp.headers.get('Authorization').split(' ');
          const token = headers[headers.length - 1 ];
          if (token != null) {
            this.token = new User(token);
            console.log(this.token);
            localStorage.setItem('currentUser', JSON.stringify(this.token));
            return true;
          } else {
            return false;
          }
        })
      );
  }



  checkHeaders(data) {
    console.log(data.headers.get('Authorization'));
  }



  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  public hasValidToken(): boolean {
    return this.token != null && !this.token.expired;
  }


  private prepareHeader(): object {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');

    return {
      headers: headers,
      observe: 'response'
    };
  }




}
