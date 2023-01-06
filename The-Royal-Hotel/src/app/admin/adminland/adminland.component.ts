import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminland',
  templateUrl: './adminland.component.html',
  styleUrls: ['./adminland.component.scss']
})
export class AdminlandComponent implements OnInit {
  hotelData: any;
  showReq: boolean =false;
  pData: any;
 // obj:any={};
  hotelObjData: any;

  constructor(private dataservice: DataService , private router:Router) { }

  ngOnInit(): void {
    this.hotelData = this.dataservice.postData;
    this.hotelObjData = this.dataservice.postDataObj;
    }
  hotelRequest() {
    console.log('hotel data',this.hotelData);
    
    if (this.hotelObjData) {
      this.showReq = true
    }
    else {
      alert('no request available')
    }
  }
  acceptRequest() {
    //post hotel data

    // for (var i = 0; i < this.hotelData.length; ++i){
    //     this.obj[i] = this.hotelData[i];
    // }
    this.dataservice.postHotelCall( this.hotelObjData ).subscribe((res) => {
      console.log(res);
    })
    this.showReq= false;
  }
  rejectRequest() {
    this.showReq= false;


  }
  nevigate(){

    alert ('welcocome')
    this.router.navigateByUrl('/succes')
    // this.router.navigateByUrl('~src?assets/img/bad.jpeg')


  }
  
}
