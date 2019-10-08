import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public user: any = SocialUser;
  public loggedIn: boolean;

  constructor(private authService: AuthService, public service: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      this.loggedIn = (userData != null);
      const obj = {
        email: userData.email

      };

      console.log(obj);

      this.service.SocialLogin(obj)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.toastr.success('User Login Successful');
            this.router.navigate(['/']);
            localStorage.setItem('email', obj.email);
            localStorage.setItem('token', res.token);
            localStorage.setItem('id', res.id);
            localStorage.setItem('name', res.name);
            localStorage.setItem('userRole', res.a);

          },
          err => {
            console.log(err);
          }
        );

    }
    );
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['/login']);
    this.toastr.success('You have been logged out successfully !');
  }

  onSubmit() {
    this.service.login().subscribe(
      (res: any) => {
        console.log(res);

        if (res.A === 'user') {
          this.service.formModelLogin.reset();
          this.toastr.success('User Login Successful');
          this.router.navigate(['/']);
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          localStorage.setItem('name', res.Name);
          localStorage.setItem('userRole', res.A);

        } else if (res.A === 'admin') {

          this.service.formModelLogin.reset();
          this.toastr.success('Admin Login Successful');
          this.router.navigate(['/admin']);
          localStorage.setItem('token', res.token);
          localStorage.setItem('id', res.id);
          localStorage.setItem('name', res.Name);
          localStorage.setItem('userRole', res.A);

        } else {

          this.toastr.error('Email or password invalid');
        }
      }
    );
  }

  fun() {
    this.router.navigate(['/users/registration']);
  }

}
