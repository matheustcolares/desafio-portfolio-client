import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Discipline } from "src/app/interfaces/discipline";

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
    save(discipline: Discipline){
        return this.http.post(this.apiUrl+'/save',discipline);
    }
    delete(id:string){
        return this.http.delete(this.apiUrl+'/delete/'+id);
    }
    getById(id:number){
        return this.http.get(this.apiUrl+'/find/'+id)
    }
    updateCourse(discipline:Discipline,id:number){
        discipline.id=id;
        return this.http.put(this.apiUrl+'/update',discipline)
    }
}   