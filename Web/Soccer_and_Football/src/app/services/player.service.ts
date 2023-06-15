import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeagueResponse } from '../models/leagueResponse.interface';
import { PlayerResponse } from '../models/playerResponse.interface';
import { PlayerRequest } from '../models/playerRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {


  constructor(private http: HttpClient) {}
  
  getPlayers(page: number,pageSize: number) : Observable<PlayerResponse>{
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<PlayerResponse>(
      `${environment.baseUrl}/player/?page=${page}&size=${pageSize}`, httpOptions
    );
  }

  editPlayer(editDTO: PlayerRequest ,id: number) : Observable<LeagueResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.put<LeagueResponse>(
      `${environment.baseUrl}/player/${id}`, editDTO, httpOptions
    );
  }

  deletePlayer(id: number) : Observable<LeagueResponse> {
    var token =localStorage.getItem('auth_token')
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.delete<LeagueResponse>(
      `${environment.baseUrl}/player/${id}`, httpOptions
    ); 
  }
}