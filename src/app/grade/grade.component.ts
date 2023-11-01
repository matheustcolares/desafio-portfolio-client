import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';
import { DisciplineService } from 'src/services/discipline.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
constructor(
  private courseService:CoursesService,
  private disciplineService:DisciplineService
  ){}
  courseList:any;
  disciplineList:any;
  ngOnInit(): void {
      this.disciplineService.getAll().subscribe(res=>{
        this.disciplineList=res
      })
      this.courseService.getAll().subscribe(res=>{
        this.courseList=res
      })
  }
}
