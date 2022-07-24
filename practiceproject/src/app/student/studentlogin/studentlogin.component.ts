import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControlName,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {
  studentForm! : FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.StudentFormDtata()
  }
  StudentFormDtata() {
    this.studentForm = this.fb.group({
      studentName:[''],
      studentMob:[''],
      studentEmail:['']
    })
  }
  studentDtata(){
    console.log(this.studentForm.value);
  }
  
}
