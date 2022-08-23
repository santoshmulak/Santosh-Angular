import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentName='';
  @Output() parentChild:any = new EventEmitter();
 
 
  constructor() { }

  ngOnInit(): void {
    console.log(this.parentName);
    this.parentChild.emit('santosh child');  }
  childParent(data:any){
   this.parentChild.emit(data);
  }

}
