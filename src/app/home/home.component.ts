import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private login:LoginService){}

  showComponent(role: string){
    console.log(this.login.GetUserRole());
    
    if (this.login.GetUserRole()==role) {
      return true;
    }else{
      return false;
    }
  }

}
