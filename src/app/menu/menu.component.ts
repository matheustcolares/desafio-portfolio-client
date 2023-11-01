import { Component } from '@angular/core';
import { Items } from '../interfaces/menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
items: Items[] =[
{
  title:"Usuarios",
  ngShow:true,
  role:"Administrator"
},
{
  title:"Semestre",
  ngShow:false,
  role:"Coordinator"
},
]
}
