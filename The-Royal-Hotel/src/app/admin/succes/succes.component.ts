import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.scss']
})
export class SuccesComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  signInForm!: FormGroup;

  ngOnInit(): void {
    this.formValidation()
  }
  formValidation(){
    this.signInForm = this.fb.group({
      // userName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      userName:['',[Validators.pattern("^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$")
    ]],
      })

  }
}