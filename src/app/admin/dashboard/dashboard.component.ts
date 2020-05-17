import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private  authService:  AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
    console.log(this.isLoggedIn);
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
