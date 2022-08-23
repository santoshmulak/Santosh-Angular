import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-adminsucces',
  templateUrl: './adminsucces.component.html',
  styleUrls: ['./adminsucces.component.scss']
})
export class AdminsuccesComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  newChange():void{
    this.router.navigateByUrl('adminsignin')
  }

}
