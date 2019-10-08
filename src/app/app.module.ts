import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './user/user.service';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PaymentComponent } from './payment/payment.component';
// import { AdminsidepanelComponent } from './adminsidepanel/adminsidepanel.component';
// import { ProductmanagementComponent } from './productmanagement/productmanagement.component';
// import { DepartmentmanagementComponent } from './departmentmanagement/departmentmanagement.component';


const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('720727656180-dl0t51ofi4tkrodch8cnutvquc1ls0c6.apps.googleusercontent.com', googleLoginOptions)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProductComponent,
    CategoryComponent,
    ProductCreateComponent,
    ProductDetailsComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ProductEditComponent,
    AdminHeaderComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    UserProfileComponent,
    EditProfileComponent,
    OrderHistoryComponent,
    PaymentComponent,
    // AdminsidepanelComponent,
    //ProductmanagementComponent,
    //DepartmentmanagementComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SocialLoginModule
  ],
  providers:
    [
      ProductService, UserService, CategoryService, AuthGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
      },
      {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
