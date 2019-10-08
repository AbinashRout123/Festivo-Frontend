import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentmanagementComponent } from './departmentmanagement/departmentmanagement.component';
import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
import { AdminPageComponent } from './admin-page.component';
import { AuthGuard } from '../auth.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
  {
    path: '', component: AdminPageComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'department', component: DepartmentmanagementComponent
      },
      {
        path: 'product', component: ProductmanagementComponent
      },
      {
        path: 'home', component: AdminHomeComponent
      },
      {
        path: '**', redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
