import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  strageData:string="i live in paithan"
  cars:any;
  fruit:any;
  url='https://jsonplaceholder.typicode.com/users'
  mycars={
    carName:'fortuner',
    carPrice:'4500000'
  };
  matFormData:any;
  dataCommingFromChild: any;
  formData:any;

  constructor(private http:HttpClient) { }
  dataServiceFunction(){
   return this.fruit= {
                 "fruitname":"apple",
                 "color":"red",
                "price":200
              }
  }
  setFormData(formdata:any){
    this.formData=formdata;

  }
  getFormData(){
    return this.formData

  }
  //API call
  getApiCall(){
   return this.http.get(this.url);
  }

}
