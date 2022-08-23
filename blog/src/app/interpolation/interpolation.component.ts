import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {
  title = 'blog';
  name = "santosh mulak";
  myName="santosh";
  disableBox=true;
  today=Date.now();
  str='Hwllo Angular';
  val=10

  obj={
    name:"sachin",
    age:21
  }
  arr=['karan','arjun','ram','lakhan'];
  a=100;
  b=200;

  constructor() { }

  ngOnInit(): void {
  }
  getName(){
    return this.name
  }
  enableBox(){
    this.disableBox=false
  }

}
