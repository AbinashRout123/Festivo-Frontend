import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AuthService } from 'angularx-social-login';
import { PaymentComponent } from './payment/payment.component';
import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
import { DepartmentmanagementComponent } from './departmentmanagement/departmentmanagement.component';
// import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
// import { DepartmentmanagementComponent } from './departmentmanagement/departmentmanagement.component';




const routes: Routes = [

  //{ path: 'productmng', component: ProductmanagementComponent },
  //{ path: 'departmentmng', component: DepartmentmanagementComponent },
  {
    path: 'admin', loadChildren: () => import('./admin-page/admin-page.module').then(m => m.AdminPageModule)
  },
  { path: 'category', component: CategoryComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'product-create', component: ProductCreateComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'landing-page', component: LandingPageComponent},
  { path: 'cart', component: ShoppingcartComponent, canActivate: [AuthGuard] },
  { path : 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'edit-profile', component: EditProfileComponent},
  { path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard]},
  { path: 'payment', component: PaymentComponent},

  {
    path: 'user', component: UserComponent,
    children:
      [
        { path: 'login', component: LoginComponent },
        { path: 'registration', component: RegistrationComponent },
      ]
  },
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: '**', pathMatch: 'full', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
