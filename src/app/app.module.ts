import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
