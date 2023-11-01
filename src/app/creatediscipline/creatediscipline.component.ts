import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/services/courses.service';
import { DisciplineService } from 'src/services/discipline.service';

@Component({
  selector: 'app-creatediscipline',
  templateUrl: './creatediscipline.component.html',
  styleUrls: ['./creatediscipline.component.css']
})
export class CreatedisciplineComponent implements OnInit {
  constructor(private service:DisciplineService,private courseService:CoursesService){}

  courseList: any;
  ngOnInit(): void {
      this.courseService.getAll().subscribe(res =>{
        this.courseList = res;
      }
      )
  }

  submitForm(discipline:any){
    this.service.save(discipline.value).subscribe(res=>{
      console.log(res);
      
    })
  }
}
