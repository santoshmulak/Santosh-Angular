import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent implements OnInit {
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder, private dataservice : DataService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40)]],
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]

    });
  }
  postApidata(data:any){
    console.log(data);
    
    //postapi
    this.dataservice.postApiCall(data).subscribe((res)=>{
      console.log(res);
      
  })
}
}
