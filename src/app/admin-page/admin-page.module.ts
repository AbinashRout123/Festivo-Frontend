import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
import { DepartmentmanagementComponent } from './departmentmanagement/departmentmanagement.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [AdminPageComponent,
    ProductmanagementComponent,
    DepartmentmanagementComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminPageModule { }
