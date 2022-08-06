import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.scss']
})
export class AdminLogoutComponent implements OnInit {
  adminFormData:any;
  dataFlag= false;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  getServiceData(){
    // this.adminFormData = this.dataService.formData
    this.adminFormData=this.dataService.getFormData();
    console.log( this.adminFormData );
    this.dataFlag = true;
  }
}
