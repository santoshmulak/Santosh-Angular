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
  car:any="i10";
  colorOf='green'
  constructor(private serviceStorage: StorageService) { }
  ngOnInit(): void {
    console.log("before defining", this.serviceStorage.serviceData);
    this.data = this.serviceStorage.serviceData;
    this.serviceStorage.serviceData = 100;
    console.log('after defining', this.serviceStorage.serviceData);
    this.serviceStorage.serviceData = 'Shiva';
    console.log('after reassianing', this.serviceStorage.serviceData);
  }
  // getData(){
  //   let value = this.getData()
  //   console.log("value",value);
  // }

}
