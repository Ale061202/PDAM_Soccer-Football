import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  response?: String;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  
  onSubmit() {
    const {username, password} = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      () => {
        this.router.navigate(['/'])
        this.response = 'Login successful';
      },
      error => {
        this.response = 'Login failed';
      }
    );
  }

}
