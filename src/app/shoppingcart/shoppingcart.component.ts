import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart } from './cartmodel';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  model = new Cart();
  cart: any;
  c = new Cart();
  totalPrice: number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.model.UserId = +localStorage.getItem('id');
    return this.cartService.GetCart(this.model).subscribe(
      (res: any) => {
        this.cart = res;
        console.log(this.cart);
        this.funcCartTotal();
      }
    );

  }

  funcAdd(id: number) {
    this.c.UserId = +localStorage.getItem('id');
    this.c.ProductId = id;
    this.c.Quantity = 1;
    this.cartService.AddToCart(this.c).subscribe((res: any) => {
      this.ngOnInit();
      this.funcCartTotal();
    });
  }

  funcDel(id: number) {
    this.c.UserId = +localStorage.getItem('id');
    this.c.ProductId = id;
    this.c.Quantity = 1;
    this.cartService.RemoveCart(this.c).subscribe((res: any) => {
      this.ngOnInit();
      this.funcCartTotal();
    });
  }

  funcClear(id: number) {
    this.c.UserId = +localStorage.getItem('id');
    this.c.ProductId = id;
    this.c.Quantity = 1;
    this.cartService.ClearCart(this.c).subscribe((res: any) => {
      this.ngOnInit();

    });
  }

  funcCartTotal() {
    this.c.UserId = +localStorage.getItem('id');
    this.cartService.CartTotal(this.c).subscribe((res: any) => {

      localStorage.setItem('total', res);
      this.totalPrice = +localStorage.getItem('total');

    });
  }

}
