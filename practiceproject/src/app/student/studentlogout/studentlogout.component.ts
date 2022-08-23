import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-studentlogout',
  templateUrl: './studentlogout.component.html',
  styleUrls: ['./studentlogout.component.scss']
})
export class StudentlogoutComponent implements OnInit {
  form!:FormGroup;
  name: any;


  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.formData();
  }
  formData(){
    this.name = true
    this.form = this.fb.group({
      gender: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      userName:['',[Validators.required,Validators.maxLength(15)]],
      userEmail:['santosh@11.com',[Validators.email]],




      
    })
  }

}
