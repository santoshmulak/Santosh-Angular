import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

const routes: Routes = [
  {path:'ownerland',component:OwnerlandComponent},
  {path:'',redirectTo:'ownerland',pathMatch:'full'},

  {path:'ownersignin',component:OwnersigninComponent},
  {path:'ownersignup',component:OwnersignupComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
