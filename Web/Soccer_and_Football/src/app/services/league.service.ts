import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeagueResponse } from '../models/leagueResponse.interface';
import { LeagueRequest } from '../models/leagueRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {


  constructor(private http: HttpClient) {}
  
  getLeagues(page: number,pageSize: number) : Observable<LeagueResponse>{
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<LeagueResponse>(
      `${environment.baseUrl}/league/?page=${page}&size=${pageSize}`, httpOptions
    );
  }
  
  editLeague(editDTO: LeagueRequest ,id: number) : Observable<LeagueResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.put<LeagueResponse>(
      `${environment.baseUrl}/league/${id}`, editDTO, httpOptions
    );
  }

  deleteLeague(id: number) : Observable<LeagueResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.delete<LeagueResponse>(
      `${environment.baseUrl}/league/${id}`, httpOptions
    ); 
  }

  createLeague(createLeague : LeagueRequest):Observable<LeagueResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.post<LeagueResponse>(`${environment.baseUrl}/league/`,createLeague, httpOptions);
  }
}