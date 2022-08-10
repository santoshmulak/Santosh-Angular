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
  deleteRecord(id:any){
    this.dataService.deleteApiCall(id).subscribe(data=>{
      console.log(data);
      
    })
  }
  putRecord(id:any){
    let body = {adminFirstName:'jayraj'}
    this.dataService.putApiCall(id,body).subscribe(data=>{
      console.log(data);
    
  })
}

}
