import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    console.log("text Component",this.dataService.strageData);
    console.log("test data service",this.dataService.dataServiceFunction());
    
    
  }
  

}
