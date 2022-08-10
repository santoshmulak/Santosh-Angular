import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminData={
    name:'santosh',
    mobn:'9860908859'
  }
  postResponse: any;


  constructor(private router : Router, private dataService : DataService) { }

  ngOnInit(): void {
  }
  routing(){
    this.router.navigateByUrl('admin/adminLogout')
    this.router.navigateByUrl('login') 
  }

  adminFormData(adminFormData:any, abc?:any){
    console.log(adminFormData);
    console.log(abc);
    this.dataService.formData = adminFormData;
    this.dataService.setFormData(adminFormData);
    this.dataService.postApiCall(adminFormData).subscribe((respo)=>{
      console.log('postApicall',respo);
      this.postResponse=respo
      if(this.postResponse.statusKey=="success"){

      }
    })
    
  }
  loginFun(item:any){
   console.log(item);
   
  }


}
