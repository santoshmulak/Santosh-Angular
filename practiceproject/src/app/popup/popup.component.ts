import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  ApiData:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  getData(){
    this.dataService.getApiCall().subscribe((data)=>{
    this.ApiData = data;
    console.log(data);   
  })
  }

}
