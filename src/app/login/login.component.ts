import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'AS Nexus| LOGIN';
  signup: boolean = true;
  login: boolean = false;

  showsignup() {
    this.signup = true;
    this.login = false;
  }

  showlogin() {
    this.signup = false;
    this.login = true;
  }
}

