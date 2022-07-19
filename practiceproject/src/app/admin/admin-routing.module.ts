import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';

const routes: Routes = [
  // {
  //   path:'admin',children:[
  //     { path: 'adminLogin',component:AdminloginComponent},
  //     { path: 'adminLogout',component:AdminlogoutComponent},
  //   ]
  // }
  { path: 'adminLogin', component: AdminloginComponent },
  { path: 'adminLogout', component: AdminlogoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
