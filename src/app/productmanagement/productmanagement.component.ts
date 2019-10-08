import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-productmanagement',
  templateUrl: './productmanagement.component.html',
  styleUrls: ['./productmanagement.component.css']
})
export class ProductmanagementComponent implements OnInit {

  products: any;
  id;
  constructor(public router: Router, public route: ActivatedRoute, public product: ProductService) { }

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
  deleteProduct(productId) {
    const ans = confirm('Are you sure you want to delete ?');
    if (ans) {
      this.id = this.products.productId;
      this.product.DeleteProducts(productId).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
}
