// [...]
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from  './login/login.component';
import { RegisterComponent } from  './register/register.component';
import { ForgotPasswordComponent } from  './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from  './verify-email/verify-email.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const  routes:  Routes  = [
    {
        path:  'admin',
        component:  AppComponent,

        children: [
            // [...]
            { path:  'login',component:  LoginComponent},
            { path:  'register', component:  RegisterComponent },
            { path:  'forgot-password', component:  ForgotPasswordComponent },
            { path:  'verify-email', component:  VerifyEmailComponent },
            { path:  'dashboard', component:  DashboardComponent },
        ]
    }
];