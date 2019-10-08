import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  classApplied = false;

  constructor(public _user: UserService) { }

  ngOnInit() {
  //   $(document).ready(function () {
  //     $('#sidebarCollapse').on('click', function () {
  //         $('#sidebar').toggleClass('active');
  //         $(this).toggleClass('active');
  //     });
  // });
  }

  toggle() {
    this.classApplied = !this.classApplied;
    if (this.classApplied) {

    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    } else {

      document.getElementById('mySidebar').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }
  }
  logout() {
    this._user.logout();
  }
}
