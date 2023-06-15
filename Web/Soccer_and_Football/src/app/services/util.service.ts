import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtUserResponse } from '../models/jwtUserResponse.interface';
import { UserDetailsResponse } from '../models/userDetailsResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private _snackBar: MatSnackBar) {}

  showAlert(mensaje: string, tipo: string) {
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }

  saveUserSession(userResponse: JwtUserResponse) {
    localStorage.setItem('user', JSON.stringify(userResponse));
  }

  getUserSession(): UserDetailsResponse | null {
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData!) as UserDetailsResponse;
    return user;
  }

  removeUserSession() {
    localStorage.removeItem('user');
  }
}
