import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetailsResponse } from '../models/userDetailsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {}

  public getCurrentUser() : Observable <UserDetailsResponse> {
    console.log(`${environment.baseUrl}/user/me`)
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<UserDetailsResponse>(
      `${environment.baseUrl}/user/me`, httpOptions
    );
  }
  
}