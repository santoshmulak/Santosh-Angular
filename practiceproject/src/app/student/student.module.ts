import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentlogoutComponent } from './studentlogout/studentlogout.component';
console.log('studentModule');

@NgModule({
  declarations: [
    StudentloginComponent,
    StudentlogoutComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
