import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login.dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    const loginRequest = new LoginRequest(this.username,this.password);
    this.authService.login(loginRequest).subscribe(
      data => {
        this.tokenService.setToken(data.token)
      },
      error => {
        console.log(error)
      }
    );
  }
}
