import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.scss']
})
export class UsersigninComponent implements OnInit {
  apidata: any;


  constructor(private dataservice : DataService ,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm:NgForm){
    console.log(signInForm);
    console.log(signInForm.name);
    this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
      console.log(res);
      for (let index = 0; index < res.length; index++) {
        if (signInForm.name==res[index].userName){
          alert("login succesfully")
        }
        
      }
      

    })
    
  }
  getApiData(){
    this.dataservice.getApiCall().subscribe((data)=>{
    this.apidata=data
    console.log(data);

    
      
    })
  }
  

}
