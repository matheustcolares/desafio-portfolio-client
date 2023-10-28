import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/interfaces/crendentials';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }
  login(user: Credentials):Observable<User>{
    return this.http.post<User>('localhost:8080/user/login',user,this.httpOptions)}
}
