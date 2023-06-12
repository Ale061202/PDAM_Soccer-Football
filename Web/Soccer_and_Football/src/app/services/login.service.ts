import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/loginRequest.interface';
import { environment } from 'src/environments/environment';
import { JwtUserResponse } from '../models/jwtUserResponse.interface';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    private authUrl : string = environment.baseUrl + "/auth/login";

    constructor(private httpClient: HttpClient) { }

    public login(login: LoginRequest): Observable<JwtUserResponse> {
        return this.httpClient.post<JwtUserResponse>(this.authUrl, login);
    }
}

