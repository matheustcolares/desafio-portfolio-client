import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/interfaces/user';
@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    constructor(private http: HttpClient){}

    private apiUrl ='http://localhost:8080/user'

    getAll(){
        return this.http.get(this.apiUrl+'/all');
    }
    save(user: User){
        return this.http.post(this.apiUrl+'/save',user);
    }
    delete(id:string){
        return this.http.delete(this.apiUrl+'/delete/'+id);
    }

  }