import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent implements OnInit {
  apidata: any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
  }
  getApiData(){
    this.dataservice.getApiCall().subscribe((data)=>{
    this.apidata=data
    console.log(data);
    
      
    })
  }
}
