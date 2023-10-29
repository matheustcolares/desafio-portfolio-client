import { Component } from '@angular/core';
import { Credentials } from '../interfaces/crendentials';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService:LoginService,
    private router:Router){
      sessionStorage.clear()
    }
  credentials: Credentials = {
    Username:'',
    Password:''
  };
  userdata: any;

  login(username:string,password:string):void{
    this.credentials.Username = username;
    this.credentials.Password = password;

    this.loginService.login(this.credentials.Username).subscribe(res=>{
      this.userdata = res
      if(this.userdata.password === password){
        sessionStorage.setItem('id',this.userdata.id);
        sessionStorage.setItem('username',this.userdata.name);
        sessionStorage.setItem('userRole',this.userdata.role);
        this.router.navigate(['']);
      }else{
        console.error('Invalid Credential');
        
      }
    }
      )
    
  }
}
