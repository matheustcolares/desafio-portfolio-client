import { Component } from '@angular/core';
import { Credentials } from '../interfaces/crendentials';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateuserComponent } from '../createuser/createuser.component';
import { User } from '../interfaces/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private loginService:LoginService,
    private router:Router,
    private dialog:MatDialog,
    private userService:UserService){
      sessionStorage.clear()
      this.createUserAdmin()
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

  SaveUser(){
    this.dialog.open(CreateuserComponent,{
      panelClass: 'dialog',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      position: {right:'25%',left:'25%'},
    })
  }
  userAdmin:User={
    id:1,
    name :"administrator",
    username:"admin",
    password:"admin",
    role:"3"
  }
  createUserAdmin(){
    this.userService.save(this.userAdmin).subscribe(res=>{})
  }
}
