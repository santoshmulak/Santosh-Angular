import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PopupdataService } from '../popup/popupdata.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 name:any;
 surname:string="Mulak";
 myName="Radhakisan";
 interpolation="we are learning web developmment";
 number=1000;
 disableName="Rahul"
 disableFlag=true;
 ngName = "i am from paithan";
  constructor(private dataService:StorageService, private dService:DataService,private popupdataService:PopupdataService) { }
  ngOnInit(): void {
    this.name="omkar"
    console.log("login component");
    console.log("login component inherintMethod");
    console.log("name", this.name);
    console.log("surname", this.surname);
    console.log("login comonrent",this.dataService.serviceData);
    console.log("loginConponentserviceData",this.dService.strageData);
    console.log("login component acees",this.dService.dataServiceFunction().fruitname);
    console.log("login componebnt",this.dService.cars);
    console.log("login Component color",this.popupdataService.colors);
    console.log(typeof this.number);
    
    
  }
  getInterpolation(){
    return "i am in interpolation function"
  }
  getInter(){
    return this.interpolation
  }
  disableInputBox(){
    this.disableFlag=false
  }
  getData(newName:any){
    let name = "Sachin";
   this.name=newName;
   console.log("this.name",this.name);
   console.log(name);
  }
  getData2(newName2:any){
    this.name=newName2.target.value
    console.log("this.name",this.name);
   }
   onKeypressEvent(event:any){
    console.log(event.target.value);
   }
   changeFun(data:any){
    console.log(data.target.value);
   }
   buttonClick(event:any){
    alert("click event occures");
    confirm("are yo sure you ...");
    console.log(prompt( "clichk event occures"));
    
   }
   getServiceData(){
    console.log("on click",this.dataService.serviceData);
    this.dataService.data(this.dataService.serviceData);
    // this.dataService.setdata(this.dataService.newData=1000)
   }

}
