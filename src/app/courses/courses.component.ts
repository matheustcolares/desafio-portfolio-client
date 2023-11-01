import { Component,ViewChild } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreatecourseComponent } from '../createcourse/createcourse.component';
import { UpdatecourseComponent } from '../updatecourse/updatecourse.component';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private service:CoursesService ,private dialog:MatDialog){
    this.LoadCourses();
  }

  coursesList:any;
  dataSource:any;

  @ViewChild(MatPaginator) paginator !:MatPaginator;
  LoadCourses(){
    this.service.getAll().subscribe(res =>{
    this.coursesList = res;
    this.dataSource = new MatTableDataSource(this.coursesList)
    })
  }
  DeleteCourse(id:string){
    this.service.delete(id).subscribe(res=>{
      console.log(res);
      
    })
  }

  CreateCourse(){
    this.dialog.open(CreatecourseComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
    })
}
  UpdateCourse(code:any){
    this.dialog.open(UpdatecourseComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      position: {right:'25%',left:'25%'},
      data:{
        id:code
      }
    })
  }
displayedColumns: string[] = ['id', 'name', 'amount_semester','action'];

}