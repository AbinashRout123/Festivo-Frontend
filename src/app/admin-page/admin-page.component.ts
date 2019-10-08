import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  classApplied = false;
  adminPageTitle = 'department';
  Name: string;
  model: any;
  constructor(public _user: UserService, private router: Router) { }

  ngOnInit() {
    console.log(this.adminPageTitle);
  }
  Search() {
    if (this.Name !== '') {
      this.model = this.model.filter(res => {
        return res.productName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      });
    } else if (this.Name === '') {
      this.ngOnInit();
    }
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
  routeToPage(page) {
    switch (page) {
      case 'department':
        this.router.navigate(['/admin/department']);
        this.adminPageTitle = 'department';
        break;
      case 'product':
        this.router.navigate(['/admin/product']);
        this.adminPageTitle = 'product';
        break;
    }

  }
  logout() {
    this._user.logout();
  }
}
