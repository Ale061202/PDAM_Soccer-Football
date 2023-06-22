import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeamResponse } from '../models/teamResponse.interface';
import { TeamRequest } from '../models/teamRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService{


  constructor(private http: HttpClient) {}
  
  getTeams(page: number,pageSize: number) : Observable<TeamResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<TeamResponse>(
      `${environment.baseUrl}/team/?page=${page}&size=${pageSize}`, httpOptions
    );
  }

  editTeam(editDTO: TeamRequest ,id: number) : Observable<TeamResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.put<TeamResponse>(
      `${environment.baseUrl}/team/${id}`, editDTO, httpOptions
    );
  }

  deleteTeam(id: number) : Observable<TeamResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.delete<TeamResponse>(
      `${environment.baseUrl}/team/${id}`, httpOptions
    ); 
  }

  createTeam(editDTO: TeamRequest) : Observable<TeamResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.post<TeamResponse>(
      `${environment.baseUrl}/team/create`, editDTO, httpOptions
    );
  }
}