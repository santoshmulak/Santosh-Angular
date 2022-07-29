import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit , OnChanges{
  @Input() name = ''

  constructor() { 
    console.log('constuctor calling');
    
  }
  ngOnChanges(){
    console.log('ngOnChange calling');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit calling');
    
  }


}
