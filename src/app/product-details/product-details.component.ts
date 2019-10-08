import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';
import { CartService } from '../shoppingcart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../shoppingcart/cartmodel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public service: ProductService, public cat: CartService, public toast: ToastrService) { }

  productId: number;
  products: any;
  m = new Cart();
  descriptionArray: any ;

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    console.log(this.productId);
    this.service.GetProductsById(this.productId).subscribe(
      (res: any) => {
        console.log(res),
        this.products = res;
        this.descriptionArray = this.products.productDescription.split('|');
        console.log(this.descriptionArray);
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
      this.cat.AddToCart(this.m).subscribe();
      this.toast.success('Added to Bag');
    }
  }

}
