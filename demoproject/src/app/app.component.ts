import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'services in angular';
  users:any;
  titles = "interpollation"
  data = "hello code"
  constructor(private userdata:UserdataService)
  {
    console.log("userdata",userdata.users())
    this.users= userdata.users();
  }
  
}
