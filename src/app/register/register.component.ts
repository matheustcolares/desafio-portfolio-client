import { Component ,ViewChild} from '@angular/core';
import { UserService } from 'src/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService) {
    this.LoadUser();
  }

  userList: any;
  dataSource: any;

@ViewChild(MatPaginator) paginator !:MatPaginator;

  submitForm(userForm: any) {
    if (userForm.valid) {
      const formData = userForm.value;
      console.log('Formulário enviado:', formData);
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
  UpdateUser(code: any){
    console.log(code);

  }
  displayedColumns: string[] = ['id', 'name', 'registration', 'username', 'role', 'action'];
}
