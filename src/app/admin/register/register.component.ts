import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(private  authService:  AuthService, public  router:  Router) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.email, this.password);
  }

  goTo(path) {
    this.router.navigate([path]);
  }
}
