import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
