import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Credentials } from 'src/app/interfaces/crendentials';
import { User } from 'src/app/interfaces/user';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:8080/user/'
  private options = {headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")}
httpOptions = {
    headers: new HttpHeaders({
       'Content-Type': 'application/json',
       "Accept":'application/json',
       "X-API-KEY": "__KEY__", "Access-Control-Allow-Origin": "true" })
  };
  constructor(private http: HttpClient,private message: MessageService) { }
  
  login(code: string){
    return this.http.get(this.loginUrl+'getByUsername/'+code);
}
  isLogged(){
    return sessionStorage.getItem('id')!=null;
  }
  GetUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem("role")?.toString():'';
  }
}
