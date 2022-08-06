import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  xyz:any;
  @Output() parentData = new EventEmitter<any>()

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    console.log("text Component",this.dataService.strageData);
    console.log("test data service",this.dataService.dataServiceFunction());
    this.parentData.emit('Ajay');
    
  }
  sendData(data:any){
    this.parentData.emit(data);
  }
  

}
