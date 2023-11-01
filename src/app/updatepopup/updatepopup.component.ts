import { Component,Inject,OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit{
  constructor(
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<UpdatepopupComponent>,
    ){}
  rolesList:any;
  user:any;

  ngOnInit(): void {
    this.userService.getRoles().subscribe(res => {
      this.rolesList = res;
    }
    )
    this.userService.getById(this.data.id).subscribe(res =>{
      this.user = res
    })
    
  }

  submitForm(user:any){
    return this.userService.updateUser(user.value,this.data.id).subscribe(res =>{
      this.user = res
    })
  }
  getRoles(){
    return this.userService.getRoles().subscribe(res => {
      this.rolesList = res;
    }
    )
  }
}
