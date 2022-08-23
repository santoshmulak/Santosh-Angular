import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ConditionComponent } from './condition/condition.component';
import { FormComponent } from './form/form.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { StyleComponent } from './style/style.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'interpolation',component:InterpolationComponent},
  {path:'user-list',component:UserListComponent},
  {path:'condition',component:ConditionComponent},
  {path:'form',component:FormComponent},
  {path:'style',component:StyleComponent},
  {path:'user',component:UserComponent},
  {path:'parent',component:ParentComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
