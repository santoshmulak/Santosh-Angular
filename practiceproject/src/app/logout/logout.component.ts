import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  data: any;
  hide = true;
  directiveColor='red';
  name='hardik pandaya';
  a:number = 0.255;
  b:number = 0.255;
  pi:number = 3.14444425;
  str:string = 'asdflkassjh';
  date=Date.now();
  object:Object = {
    foo:'bar',baz:'quz',nested: {xyz:3,number:[1,2,3,4,5]}
  };
  colors = ["red", "green", "blue", "orange", "yellow"]
  info = {
    myInfo: {
      name: "santosh",
      age: 24,
      city: "paithan",
      ph: 9860908859
    },
    myInfo1: {
      name: "shivaji",
      age: 23,
      city: "shevgson",
      ph: 8485830984
    }
  }
  styleProp="main"
  car:any="i10";
  colorOf='green'
  items=[
    {name:"santosh",age:"24",email:"santoshmulak98@gmail.com",ph:"9860908859"},
    {name:"shivaji",age:"25",email:"shivajiadhat98@gmail.com",ph:"9999992929"},
    {name:"virat",age:"33",email:"viratkohmuak99@gmail.com",ph:"993889393"},
    {name:"rohit",age:"46",email:"rohitjfhmulak77@gmail.com",ph:"9860908859"},
  ]
  constructor(private serviceStorage: StorageService) { }
  ngOnInit(): void {
    console.log("before defining", this.serviceStorage.serviceData);
    this.data = this.serviceStorage.serviceData;
    this.serviceStorage.serviceData = 100;
    console.log('after defining', this.serviceStorage.serviceData);
    this.serviceStorage.serviceData = 'Shiva';
    console.log('after reassianing', this.serviceStorage.serviceData);
  }
  styleFun(){
    return 'main1'
  }
  // getData(){
  //   let value = this.getData()
  //   console.log("value",value);
  // }

}
