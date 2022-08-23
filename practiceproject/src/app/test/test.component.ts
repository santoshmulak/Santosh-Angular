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
  subData: any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    console.log("text Component",this.dataService.strageData);
    console.log("test data service",this.dataService.dataServiceFunction());
    this.parentData.emit('Ajay');
    this.dataService.subjectData.subscribe(data=>{
      this.subData=data.userData;
      console.log(this.subData);
      
    })
    // console.log('subject Data',this.dataService.subjectData);
    

    
  }
  sendData(data:any){
    this.parentData.emit(data);
  }
  ngOnDestroy(){
    this.dataService.subjectData.next({})
    this.dataService.cars='';
    this.dataService.strageData='';
  }
  

}
