import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login.dto';
import { environment } from 'src/environments/environment.prod';
import { JwtUser } from '../models/jwtUser.dto';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    authUrl = environment.baseUrl + "/auth/";

    constructor(private httpClient: HttpClient) { }

    public login(login: LoginRequest): Observable<JwtUser> {
        return this.httpClient.post<JwtUser>(this.authUrl + 'login', login);
    }
}

