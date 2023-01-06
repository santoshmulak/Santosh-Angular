import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminfaillComponent } from './adminfaill/adminfaill.component';
import { AdminlandComponent } from './adminland/adminland.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccesComponent } from './adminsucces/adminsucces.component';
import { SuccesComponent } from './succes/succes.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'adminland', component: AdminlandComponent},
  {path:'', redirectTo:'adminland', pathMatch:'full'},

  {path:'adminsignin',component:AdminsigninComponent},
  {path:'adminsignup',component:AdminsignupComponent},

  {path:'adminsucces',component:AdminsuccesComponent},
  {path:'adminfaill',component:AdminfaillComponent},

  {path:'test',component:TestComponent},
  {path:'succes',component:SuccesComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
