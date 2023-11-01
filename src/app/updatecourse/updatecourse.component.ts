import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from 'src/services/courses.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {
  constructor(
    private courseService:CoursesService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){}
    course:any;
  ngOnInit(): void {
      this.courseService.getById(this.data.id).subscribe(res=>{
        this.course = res
      })
  }
  submitForm(course:any){
    return this.courseService.updateCourse(course.value,this.data.id).subscribe(res =>{
      this.course = res
    })
}
}
