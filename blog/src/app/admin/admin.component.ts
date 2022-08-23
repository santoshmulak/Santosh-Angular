import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  name="";

  constructor(private dataService:DataService) { 
  }

  ngOnInit(): void {
   
    console.log(this.dataService.getData());
    let data=this.dataService.getData();
    this.name=data.name

  }

}
