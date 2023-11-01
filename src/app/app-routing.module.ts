import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { authguardGuard } from './shared/authguard.guard';
import { CoursesComponent } from './courses/courses.component';
import { DisciplineComponent } from './discipline/discipline.component';

const routes: Routes = [
  {path:'', component: HomeComponent,canActivate:[authguardGuard]},
  {path:'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'courses',component:CoursesComponent},
  {path:'discipline',component:DisciplineComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
