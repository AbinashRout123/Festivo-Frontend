import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { ProductService } from '../product/product.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../shoppingcart/cart.service';
import { Cart } from '../shoppingcart/cartmodel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  product: any;
  productList: any;
  c = new Cart();
  id: any;
  Name: string;
  model: any;

  constructor(private _user: UserService, public products: ProductService, public toast: ToastrService, public service: CartService) { }



  ngOnInit() {
    this.products.GetProducts()
      .subscribe(
        res => {
          console.log(res);
          this.productList = res;
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
      this.c.UserId = +localStorage.getItem('id');
      this.c.ProductId = id;
      this.c.Quantity = 1;
      this.service.AddToCart(this.c).subscribe();
      this.toast.success('Added to Bag');
    }
  }

  Search(query) {
    this.Name = query;
    if (this.Name !== '') {
      this.model = this.model.filter(res => {
        return res.productName.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      });
    } else if (this.Name === '') {
      this.ngOnInit();
    }
  }

}
