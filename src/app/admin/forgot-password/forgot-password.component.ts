import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  title: string;

  constructor(private  authService:  AuthService, public  router:  Router) { }

  ngOnInit(): void {
    this.title = "Forgot Password?";
  }

  forgotPassword() {
      this.authService.sendPasswordResetEmail(this.email);
  }

  goTo(path) {
    this.router.navigate([path]);
  }
}
