import { Component } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent {
  constructor(private service:CoursesService){}

  submitForm(course:any){
    this.service.save(course.value)
  }
}
