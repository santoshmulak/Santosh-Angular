import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  strageData:string="i live in paithan"
  cars:any;
  fruit:any;
  // url='https://jsonplaceholder.typicode.com/users'
  url='http://localhost:3000/posts'

  mycars={
    carName:'fortuner',
    carPrice:'4500000'
  };
  matFormData:any;
  dataCommingFromChild: any;
  formData:any;
  subjectData = new Subject<any>();

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
  getApiCall():Observable<Object>{       //to get data not required parameters
   return this.http.get(this.url);
  //  return this.http.get(this.url + "/" + 'pjGsaBd')     //to get specific data with id
  }
  postApiCall(data:any){  //to post data parameter required
    return this.http.post(this.url,data);
  }
  deleteApiCall(id:any){
    return this.http.delete(this.url + "/" + id)

  }
  putApiCall(id:any,body:any){
    return this.http.put(this.url + "/" + id, body)
  }

  
}
