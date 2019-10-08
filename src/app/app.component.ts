import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { CategoryService } from './category/category.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Festivo';
  // tslint:disable-next-line: max-line-length
  constructor(public route: ActivatedRoute, public service: ProductService, public toastr: ToastrService ,public _user: UserService, public category: CategoryService) { }

  categoryList: any;
  categoryId: any;
  Name: string;
  model: any;


  ngOnInit() {
    this.category.GetCategory()
      .subscribe(
        res => {
          this.categoryList = res;
        },
        err => {
          console.log(err);
        }
      );
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

  logout() {
    this.toastr.success('You have been logged out successfully !');
    this._user.logout();
  }
}
