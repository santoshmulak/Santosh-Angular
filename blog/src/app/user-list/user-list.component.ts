import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  currentVal = ""
 
  constructor() { }

  ngOnInit(): void {
  }
  getName(){
    alert('welcome to agular')
  }
  myEvent(evt:any){
    console.log(evt);
    
  }
  getVal(val:any){
    console.log(val);
    this.currentVal=val
    
  }
  

}
