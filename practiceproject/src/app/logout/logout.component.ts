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
  constructor(private serviceStorage : StorageService) { }
  ngOnInit(): void {
    console.log("before defining",this.serviceStorage.serviceData);
   this.data=this.serviceStorage.serviceData;
   this.serviceStorage.serviceData=100;
   console.log('after defining', this.serviceStorage.serviceData);
   this.serviceStorage.serviceData='Shiva';
   console.log('after reassianing', this.serviceStorage.serviceData);
  }
  // getData(){
  //   let value = this.getData()
  //   console.log("value",value);
  // }

}
