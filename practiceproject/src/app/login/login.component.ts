import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 name:any;
 surname:string="Mulak"
  constructor() { }
  ngOnInit(): void {
    this.name="omkar"
    console.log("login component");
    console.log("login component inherintMethod");
    console.log("name", this.name);
    console.log("surname", this.surname);
  }
  getData(newName:any){
    let name = "Sachin";
   this.name=newName;
   console.log("this.name",this.name);
   console.log(name);
   
  }
  getData2(newName:any){
    this.name=newName;
    console.log("this.name",this.name);
   }

}
