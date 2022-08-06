import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myName = 'vijay patil'
  title = 'practiceproject';
  childData:any;
  childFlag=true
  userMob:any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  dataFromParToChild(data:any){
    this.myName = data
  }
  ngDestroy(){
    this.childFlag=false
  }
  parentDataFun(data:any){
    console.log('datacommingfrom==>child',data);
    this.dataservice.dataCommingFromChild=data;
    
  }
  getData(data:any){
    console.log('data comming from child----',data);
    this.childData = data;
  }
  sendData(data:any){
    this.userMob = data

  }

}
