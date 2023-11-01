import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "src/app/interfaces/course";
@Injectable({
    providedIn:'root'
})
export class CoursesService{
    constructor(private http:HttpClient){}

    private apiUrl = 'http://localhost:8080/course'

    getAll(){
        return this.http.get(this.apiUrl+'/all')
    }
    save(course:Course){
        return this.http.post(this.apiUrl+'/save',course).subscribe(res=>{
          console.log(res); 
        })
    }
    delete(id:string){
        return this.http.delete(this.apiUrl+'/delete/'+id)
    }
    getById(id:number){
        return this.http.get(this.apiUrl+'/find/'+id)
    }
    updateCourse(course:Course,id:number){
        course.id=id;
        return this.http.put(this.apiUrl+'/update',course)
    }
}