import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SininComponent } from './sinin/sinin.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';



@NgModule({
  declarations: [
    SininComponent,
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
