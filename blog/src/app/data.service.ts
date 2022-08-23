import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getData(){
    return {
      name:'anil',
      age:10,
      id:199
    }
  }
}
