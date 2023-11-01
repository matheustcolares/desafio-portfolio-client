import { Component ,ViewChild} from '@angular/core';
import { UserService } from 'src/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService, private dialog:MatDialog) {
    this.LoadUser();
  }

  userList: any;
  dataSource: any;
  rolesList:any;

@ViewChild(MatPaginator) paginator !:MatPaginator;

  submitForm(userForm: any) {
    if (userForm.valid) {
      const formData = userForm.value;
      this.userService.save(formData)
    }
  }

  LoadUser() {
    this.userService.getAll().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList)
      this.dataSource.paginator=this.paginator;

    })
    
  }
  DeleteUser(id:number){
    this.userService.delete(id).subscribe(res =>{
      console.log(res);
      
    })
  }
  UpdateUser(code: any){
    this.dialog.open(UpdatepopupComponent,{
      panelClass: 'dialog',
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      position: {right:'25%',left:'25%'},
      data:{
        id:code
      }
    })
  }
  getRoles(){
    return this.userService.getRoles().subscribe(res => {
      this.rolesList = res;
    }
    )
  }
  displayedColumns: string[] = ['id', 'name', 'registration', 'username', 'role', 'action'];
}
