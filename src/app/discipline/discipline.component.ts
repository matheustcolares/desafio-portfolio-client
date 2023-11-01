import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DisciplineService } from 'src/services/discipline.service';
import { CreatedisciplineComponent } from '../creatediscipline/creatediscipline.component';
import { UpdatedisciplineComponent } from '../updatediscipline/updatediscipline.component';
import { CoursesService } from 'src/services/courses.service';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.css']
})
export class DisciplineComponent implements OnInit{
  constructor(private service:DisciplineService ,private dialog:MatDialog, private courseService:CoursesService){
    this.LoadDiscipline();
  }
  ngOnInit(): void {
      this.course
  }
  course:any
  disciplineList:any;
  dataSource:any;

  @ViewChild(MatPaginator) paginator !:MatPaginator;
  LoadDiscipline(){
    this.service.getAll().subscribe(res =>{
    this.disciplineList = res;
    this.dataSource = new MatTableDataSource(this.disciplineList)
    })
  }
  DeleteDiscipline(id:string){
    this.service.delete(id).subscribe(res=>{
      console.log(res);
      
    })
  }

  CreateDiscipline(){
    this.dialog.open(CreatedisciplineComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
    })
}
  UpdateDiscipline(code:any){
    this.dialog.open(UpdatedisciplineComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      position: {right:'25%',left:'25%'},
      data:{
        id:code
      }
    })
  }
displayedColumns: string[] = ['id', 'name', 'description','course','semester','action'];
}
