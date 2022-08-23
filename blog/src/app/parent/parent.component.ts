import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  name='santosh mulak';
  childData: any;

  constructor() { }

  ngOnInit(): void {
  }

  parentInput(data:any){
    this.name = data;
  }

  childParent(data:any){
    console.log('data from child',data);
    this.childData = data;
    
  }

}
