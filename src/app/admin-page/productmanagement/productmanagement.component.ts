import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent implements OnInit {

  products: any;
  id;
  category: any;
  Name: string;
  model: any;
  constructor(public router: Router, public route: ActivatedRoute, public product: ProductService, public cat: CategoryService) { }

  ngOnInit() {
    this.product.GetProducts()
      .subscribe(
        res => {
          console.log(res),
            this.products = res;
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

  deleteProduct(productId) {
    const ans = confirm('Are you sure you want to delete ?');
    if (ans) {
      this.id = this.products.productId;
      this.product.DeleteProducts(productId).subscribe(() => {
        this.ngOnInit();
      });
    }
  }

  getCategory() {
    this.cat.GetCategory()
      .subscribe(
        result => {
          console.log(result),
            this.category = result;
        },
        error => {
          console.log(error);
        }
      );
  }

}
