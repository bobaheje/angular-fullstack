import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';

const routes:Routes=[
  {
    path:'', 
    redirectTo:'/signin',
    pathMatch:'full'
  },

  {
    path:'signin',
    component:LoginComponent
  },
  
  {
    path:'user',
    component:UserComponent,
    canActivate:[AuthGuardService]
  },

  // {
  //   path:'category',
  //   component:CategoryComponent,
  //   canActivate:[AuthGuardService]
  // },
  
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[AuthGuardService],
    children:[
      {
        path:'category',
        component:CategoryComponent,
        canActivate:[AuthGuardService]
      },
      {
        path:'user',
        component:UserComponent,
        canActivate:[AuthGuardService]
      }
      

    ]
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
