import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myName = 'vijay patil'
  title = 'practiceproject';
  ngOnInit(): void {
  }
  dataFromParToChild(data:any){
    this.myName = data
  }
}
