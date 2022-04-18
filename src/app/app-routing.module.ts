import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EmployeelistboardComponent } from './employeelistboard/employeelistboard.component';
import { EmployeesdashboardeComponent } from './employeesdashboarde/employeesdashboarde.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path :'userlogin',component:UserloginComponent},
  {path :'adminlogin',component:AdminloginComponent},
  {path :'dashboard',component:EmployeesdashboardeComponent},
  {path :'employeelistboard',component:EmployeelistboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents=[UserloginComponent,AdminloginComponent]
