import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

import {Injectable, Injector} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../models/user.model";
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private router: Router;

    constructor(router: Router){
        this.router = router;
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request to add the new header
        const headers = {'Content-Type': 'application/json', 'Accept': 'application/json'};
        let token: User;
        if (req.url.indexOf('/login') !== -1) {
            const clonedRequest = req.clone({ setHeaders: headers });
            return next.handle(clonedRequest);
        }
        if (localStorage.getItem('currentUser') != null) {
            token = JSON.parse(localStorage.getItem('currentUser'));
            if (token.expired) {
                this.router.navigate(['/public/signin']);
            }
        }
        console.log(token);
        if (token != null) {
            headers['Authorization'] = `Bearer ${token.jwtToken}`;
        }
        const clonedRequest = req.clone({ setHeaders: headers });
        return next.handle(clonedRequest).pipe(tap(
          (event: HttpEvent<any>) => {}, (err: any) => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
                // handle 401 errors
                this.router.navigate(['/public/signin']);
            }}
          )
        );
    }
}
