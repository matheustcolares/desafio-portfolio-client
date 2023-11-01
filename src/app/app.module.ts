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
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { CoursesComponent } from './courses/courses.component';
import { CreatecourseComponent } from './createcourse/createcourse.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    UpdatepopupComponent,
    CoursesComponent,
    CreatecourseComponent,
    UpdatecourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
