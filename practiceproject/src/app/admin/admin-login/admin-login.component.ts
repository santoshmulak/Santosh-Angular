import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  adminData={
    name:'sasasas',
    mobn:'9879797998'
  }

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  routing(){
    this.router.navigateByUrl('admin/adminLogout')
    this.router.navigateByUrl('login') 
  }

  adminFormData(adminFormData:any){
    console.log(adminFormData);
  }
  loginFun(item:any){
   console.log(item);
   
  }


}
