import { Component, OnInit } from '@angular/core';
import { PopupdataService } from '../popupdata.service';

@Component({
  selector: 'app-popup1',
  templateUrl: './popup1.component.html',
  styleUrls: ['./popup1.component.scss']
})
export class Popup1Component implements OnInit {

  constructor(private popupdataService:PopupdataService ) { }

  ngOnInit(): void {
  }
  colors(){
    console.log("popupcomponentcolor",this.popupdataService.colors);
    console.log(this.popupdataService.data);
    console.log(this.popupdataService.name);
  }

}
