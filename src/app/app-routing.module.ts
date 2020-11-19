import { AuthGuardService } from './services/auth-guard.service';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { UserAddComponent } from './user-add/user-add.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'users',
    component:UserAddComponent
  }
  ,
  {
    path:'tasks',
    component: TaskListComponent
  },
  {
    path:'tasks/add',
    component:TaskAddComponent
  },
  {
    path:'tasks/update/:index',
    component:TaskUpdateComponent
  },
  {
    path:'dashbaord',
    component:DashbaordComponent,
    canActivate: [AuthGuardService]
  },

    {
    path:'error500',
    component:Error500Component
  },
  {
   path:'**',
   component:Error404Component
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
