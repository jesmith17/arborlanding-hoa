import {JwtHelperService} from '@auth0/angular-jwt';
import {decode} from 'punycode';

export class User {

    firstName: String;
    lastName: String;
    email: number;
    id: number;
    jwtToken: String;
    expirationDate: Date;
    expired: boolean;
    street: String;
    city: String;
    zip: String;
    state: String;
    position: String;
    full_name: String;




    constructor(token: string) {
        const helper = new JwtHelperService();
        if (token != null) {
            const decodedToken = helper.decodeToken(token);
            this.jwtToken = token;
            this.id = decodedToken.id;
            this.email = decodedToken.email;
            this.firstName = decodedToken.first_name;
            this.lastName = decodedToken.last_name;
            this.expirationDate = helper.getTokenExpirationDate(token);
            this.expired = helper.isTokenExpired(token);
            this.full_name = decodedToken.first_name + ' ' + decodedToken.last_name;
        }
    }




}
