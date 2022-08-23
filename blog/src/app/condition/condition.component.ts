import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss']
})
export class ConditionComponent implements OnInit {
  show=false;
  color='blue';
  colors='red';
  data=['anil','peter','sam','karan'];
  data1=[{
    name:'santosh',
    age:24,
    email:'abc123@gmail.com'
  },
  {
    name:'sachin',
    age:21
  },
  {
    name:'vaishnavi',
    age:16,
    email:'jkl123@gmail.com'

  },
  {
    name:'omkar',
    age:14,
    email:'xyz123@gmail.com'

  },

]

  

  constructor() { }

  ngOnInit(): void {
  }

}
