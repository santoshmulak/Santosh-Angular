import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
users()
  {
    return [
      {name:'santosh',age:'23',gmail:'santoshmulak98@gmail.com'},
      {name:'shivaji',age:'24',gmail:'shivaji98@gmail.com'},
      {name:'sachin',age:'20',gmail:'sachinmulak98@gmail.com'},
    ]
  }
}
