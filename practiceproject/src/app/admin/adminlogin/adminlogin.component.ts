import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  routing(){
  // this.router.navigateByUrl('admin/adminLogout')
  this.router.navigateByUrl('login') 
}

}
