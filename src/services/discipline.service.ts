import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class DisciplineService{
    constructor(private http:HttpClient)
    {}
    private apiUrl ='http://localhost:8080/discipline'
    getAll(){
        return this.http.get(this.apiUrl+'/all');
    }
    save(discipline: any){
        return this.http.post(this.apiUrl+'/save',discipline);
    }
    delete(id:string){
        return this.http.delete(this.apiUrl+'/delete/'+id);
    }
}