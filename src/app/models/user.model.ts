import {JwtHelperService} from "@auth0/angular-jwt";

export class User {

    firstName:string;
    lastName:string;
    email: number;
    role: string;
    id: number;
    fullName: string;
    jwtToken:string;
    expirationDate: Date;
    expired: boolean;




    constructor(token: string) {
        const helper = new JwtHelperService();
        if (token != null) {
            const decodedToken = helper.decodeToken(token);
            this.jwtToken = token;
            this.id = decodedToken.id;
            this.email = decodedToken.email;
            this.firstName = decodedToken.first_name;
            this.lastName = decodedToken.last_name;
            this.role = decodedToken.role;
            this.expirationDate = helper.getTokenExpirationDate(token);
            this.expired = helper.isTokenExpired(token);
            this.fullName = decodedToken.name;


        }
    }



}
