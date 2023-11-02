import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-login-tab',
  templateUrl: './signup-login-tab.component.html',
  styleUrls: ['./signup-login-tab.component.css']
})
export class SignupLoginTabComponent {
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