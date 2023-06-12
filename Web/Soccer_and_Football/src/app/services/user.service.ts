import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetailsResponse } from '../models/userDetailsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {}

  public getCurrentUser():Observable <UserDetailsResponse> {
    return this.http.get<UserDetailsResponse>(
      `${environment.baseUrl}/user/me`
    );
  }
  
}