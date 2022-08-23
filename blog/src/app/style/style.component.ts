import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  color='pink'
  err=true

  constructor() { }

  ngOnInit(): void {
  }
  updateColor(){
    this.color='blue'
  }


}
