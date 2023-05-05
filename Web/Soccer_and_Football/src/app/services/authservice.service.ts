import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'https://localhost:8080';

    constructor(private http: HttpClient) { }

    login(username: string, password:string): Observable<any> {
        return this.http.post('${apiUrl}/auth/login', { username , password});
    }
}