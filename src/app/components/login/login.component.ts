import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../model/LoginUser';
import { AuthService } from '../../services/auth.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  // tslint:disable
  loginUser: LoginUser = {
    email: '',
    password: ''
  };
  error: string;

  // userEmail: string;
  // userPassword: string;

  onLogin() {
    this.authService.login(this.loginUser.email, this.loginUser.password)
    .then( res => {
      this.router.navigate(['/']);
    })
    .catch( err => {
      this.error = 'The email or password is invalid, please try again';
    });
  }

}
