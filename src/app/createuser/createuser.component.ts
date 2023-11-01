import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit{
  constructor(private userService:UserService){}
  

  roleLis:any;
  ngOnInit(): void {
      this.userService.getRoles().subscribe(res => {
        this.roleLis =res;
      })
    }
  


  submitForm(user:any){
    return this.userService.save(user.value).subscribe(res =>{
      console.log(res);
      
    })
}
}
