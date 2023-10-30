import { Component, DoCheck } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements DoCheck{
  title = 'desafio-portfolio-client';
  ismenurequerid=false

constructor(private router:Router){}

  ngDoCheck(): void {
    let currentUrl= this.router.url;
    if (currentUrl==='/login') {
      this.ismenurequerid= false;
    }else{
      this.ismenurequerid=true;
    }
}
}
