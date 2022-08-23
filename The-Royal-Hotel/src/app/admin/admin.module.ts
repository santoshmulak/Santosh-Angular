import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandComponent } from './adminland/adminland.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AdminsuccesComponent } from './adminsucces/adminsucces.component';



@NgModule({
  declarations: [
    AdminlandComponent,
    AdminsignupComponent,
    AdminsigninComponent,
    AdminsuccesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule
  ]
})
export class AdminModule { }
console.log('admin works');
