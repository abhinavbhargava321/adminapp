import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean;
  title: string;

  constructor(private  authService:  AuthService, public  router:  Router) {
    if(!localStorage.getItem('isLogin')) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.title = "Dashboard";
  }

  logout(){
    this.authService.logout();
  }

}
