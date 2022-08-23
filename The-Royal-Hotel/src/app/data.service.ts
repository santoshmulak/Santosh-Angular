import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  // adminurl= 'http://localhost:3000/admin'
  userurl= 'http://localhost:3000/user'
  // ownerurl= 'http://localhost:3000/owner'


  constructor(private http : HttpClient) { }

  //gatApiCall
  getApiCall(){
    return this.http.get(this.userurl);
  }
  

  //postApicall
  postApiCall(data:any){
    return this.http.post(this.userurl, data)
  }
}
