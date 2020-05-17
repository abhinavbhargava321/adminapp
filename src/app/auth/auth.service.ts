import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
// import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import {auth} from 'firebase';
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('isLogin', null);
      this.router.navigate(['dashboard']);
    });
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.router.navigate(['login']);
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    this.router.navigate(['login']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
    this.router.navigate(['login']);
  }

  async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('isLogin');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
}
