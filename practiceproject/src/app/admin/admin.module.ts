import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
console.log('adminModule');

@NgModule({
  declarations: [
    AdminloginComponent,
    AdminlogoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminloginComponent,
    AdminlogoutComponent
  ]
})
export class AdminModule { }
