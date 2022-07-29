import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {
  studentForm! : FormGroup;
  studentMatForm!:FormGroup;
  matForm:Boolean=false;

  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit(): void {
    this.studentFormData();
    // this.studentMatData()
  }
  studentFormData() {
    this.studentForm = this.fb.group({
      studentName:['',[Validators.required,Validators.maxLength(15)]],
      studentMob:['9860908859',[Validators.pattern('^[0-9]{10}$'), Validators.maxLength(12),Validators.minLength(10)]],
      studentEmail:['santosh@11.com',[Validators.email]],
    })

  }
  studentData(){
    console.log(this.studentForm.value);
  }
  studentMatData(){
    this.matForm=true;
    this.studentMatForm=this.fb.group({
      studentMatName: ['', [Validators.required, Validators.maxLength(10)]],    })
  }
  matFormData(){
    console.log(this.studentMatForm.value);
    this.dataService.matFormData=this.studentMatForm.value
    
  }
}
