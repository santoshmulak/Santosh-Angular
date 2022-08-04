import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() name = ''

  constructor() {
    console.log('constuctor calling');

  }
  ngOnChanges(data:SimpleChanges) {
    console.log('ngOnChange calling');
    console.log('data',data);
    

  }
  ngOnInit(): void {
    console.log('ngOnInit calling');
  }
  ngDoCheck(){
    console.log('ngDoCheck calling');
  }
  ngDCheck(data:any){
    console.log(data);
    
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit calling');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked calling');
    
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit calling');
    
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked calling');
    
  }
  ngOnDestroy(){
    console.log('ngOnDestroy calling');   
  }


}
