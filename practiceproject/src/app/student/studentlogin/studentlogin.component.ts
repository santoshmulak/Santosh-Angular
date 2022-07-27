import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {
  studentForm! : FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.StudentFormData()
  }
  StudentFormData() {
    this.studentForm = this.fb.group({
      studentName:['',[Validators.required,Validators.maxLength(15)]],
      studentMob:['9860908859',[Validators.pattern('^[0-9]{10}$'), Validators.maxLength(12),Validators.minLength(10)]],
      studentEmail:['santosh@11.com',[Validators.email]]
    })
  }
  studentData(){
    console.log(this.studentForm.value);
  }
  
}
