import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'interpolation',component:InterpolationComponent},
  {path:'user-list',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
