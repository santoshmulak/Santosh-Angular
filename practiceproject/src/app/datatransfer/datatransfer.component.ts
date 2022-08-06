import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datatransfer',
  templateUrl: './datatransfer.component.html',
  styleUrls: ['./datatransfer.component.scss']
})
export class DatatransferComponent implements OnInit {
 @Output() childData  = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  sendData(data:any){
    this.childData.emit(data); 
  }
  

}
