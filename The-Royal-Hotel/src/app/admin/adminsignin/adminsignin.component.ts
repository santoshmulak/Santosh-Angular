import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent implements OnInit {
  user={ email: 'hhhs', password:''}
  apidata: any;


  constructor(private dataservice : DataService) { }

  getApiData(){
    this.dataservice.getApiCall().subscribe((data)=>{
    this.apidata=data
    console.log(data);
    
      
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
   
    




  }
  


}


