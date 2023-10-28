import { Component } from '@angular/core';
import { Credentials } from '../interfaces/crendentials';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService){}
  credentials: Credentials = {
    username:'',
    password:''
  };
  login(username:string,password:string):void{
    this.credentials.username = username;
    this.credentials.password = password;

    this.loginService.login(this.credentials)
  }
}
