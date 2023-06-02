import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  TOKEN_KEY = 'AuthToken';

  constructor() { }

  public setToken(token: string): void{
    localStorage.setItem(this.TOKEN_KEY,token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public logOut(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
