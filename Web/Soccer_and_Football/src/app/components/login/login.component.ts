import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/loginRequest.interface';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UtilService } from 'src/app/services/util.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  formularioLogin: FormGroup;
  ocultarPassword: boolean = true;
  mostrarLoading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private _loginService: LoginService, private _utilService: UtilService, private _userService: UserService) {
    this.formularioLogin = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {

    this.mostrarLoading = true;

    const request: LoginRequest = {
      username: this.formularioLogin.value.username,
      password: this.formularioLogin.value.password
    }

    this._loginService.login(request).subscribe({
      next: (data) => {
        if (data) {
          this._utilService.saveUserSession(data)
          localStorage.setItem("auth_token", data.token)
          this._userService.getCurrentUser().subscribe({
            next: (userData) => {
              localStorage.setItem('user', JSON.stringify(userData));
              console.log(userData)
              this.router.navigate(["view/dashboard"])
            }
          })
        } else {
          this._utilService.showAlert("Ha habido un error", "Vaya!!!")
        }
      },
      complete:()=>{
        this.mostrarLoading = false;
      },
      error: () =>{
        this._utilService.showAlert("Ha habido un error", "Vaya!!!")
      }
    })
  }

}