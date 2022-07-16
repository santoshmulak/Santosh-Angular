import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupdataService {
  colors:any=["red","blue","green","yellow","white"]
  data=10000;
  name={
    "FN":"Vijay","LN":"Patil"
  }
  constructor() { }
  getD(){
    return this.data
  }
}
