import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  title: string;

  constructor(private  authService:  AuthService, public  router:  Router) {}

  ngOnInit(): void {
    this.title = "Welcome Back, Login";
  }

  login() {
    this.authService.login(this.email, this.password);
  }

  goTo(path) {
    this.router.navigate([path]);
  }
}
