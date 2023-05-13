import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  username = 'admin';
  password = 'admin';
  login() {
    this.authService.login(this.username, this.password);
  }
}
