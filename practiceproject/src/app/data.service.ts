import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  strageData:string="i live in paithan"
  cars:any;
  fruit:any;
  mycars={
    carName:'fortuner',
    carPrice:'4500000'
  };
  matFormData:any;
  constructor() { }
  dataServiceFunction(){
   return this.fruit= {
                 "fruitname":"apple",
                 "color":"red",
                "price":200
              }
  }
}
