import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentlogoutComponent } from './studentlogout/studentlogout.component';

const routes: Routes = [
  {path:'studentLogin',component:StudentloginComponent},
  {path:'studentLogout',component:StudentlogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
