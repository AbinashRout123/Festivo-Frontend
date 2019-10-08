import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService , private router: Router) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.Register().subscribe(
      (res: any) => {
        if (res.Succeed === true) {
          this.service.formModel.reset();
          this.toastr.success('New User Added', 'Registration Successful');
          this.router.navigate(['/users/login']);
        } else {
          this.toastr.error('Email Id already Exists', 'Registration Not Successful');
        }
      }
    );
  }

}
