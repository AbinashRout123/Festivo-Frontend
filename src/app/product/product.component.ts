import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Cart } from '../shoppingcart/cartmodel';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../shoppingcart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category/category.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  constructor(public route: ActivatedRoute, public service: CartService, private _prod: ProductService, public toast: ToastrService, public cat: CategoryService) { }

  products: any;
  m = new Cart();
  categoryId: any;
  productList: any;
  category: any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryId = params.id;
      this.getProductsByCategoryId(this.categoryId); // reset and set based on new parameter this time
    });
  }



  getProductsByCategoryId(categoryId: number) {
    this.categoryId = +this.route.snapshot.paramMap.get('id');
    console.log(this.categoryId);
    this.categoryId = categoryId;
    this._prod.GetProductsByCategoryId(this.categoryId).subscribe(
      (res: any) => {
        console.log(res),
          this.products = res;
      },
      err => {
        console.log(err);
      }
    );
  }


  AddCart(id: number) {
    if (!localStorage.getItem('userRole')) {
      this.toast.error('Please Sign In to Add Item to Cart');
    } else {
      this.m.UserId = +localStorage.getItem('id');
      this.m.ProductId = id;
      this.m.Quantity = 1;
      this.service.AddToCart(this.m).subscribe();
      this.toast.success('Added to Bag');
    }
  }

}
