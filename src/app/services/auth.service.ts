import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authKey = 'isLogin';
  constructor(private router: Router) {}
  get isLogin() {
    return localStorage.getItem(this.authKey) == 'true';
  }
  login(username: string, password: string) {
    if (username == 'admin' && password == 'admin') {
      localStorage.setItem(this.authKey, 'true');
      this.router.navigate(['']);
    } else {
      alert('wrong username & password');
    }
  }
  logout() {
    localStorage.removeItem(this.authKey);
    this.router.navigate(['login']);
  }
}
