import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product/product.service';
import { CategoryService } from '../category/category.service';
import { FormBuilder } from '@angular/forms';
import { Cart } from './cartmodel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fb: FormBuilder, private http: HttpClient, public product: ProductService, public category: CategoryService) { }

  formModelCart = this.fb.group({
    UserId: [''],
    ProductId: [''],
    Quantity: ['']
  });

  public AddToCart(model: Cart) {
    return this.http.post('https://localhost:5001/api/Cart/addToCart', model);
  }

  public GetCart(model: Cart) {
    return this.http.post('https://localhost:5001/api/Cart/getCart', model);
  }

  public RemoveCart(model: Cart) {
    return this.http.post('https://localhost:5001/api/Cart/removeFromCart', model);
  }

  public ClearCart(model: Cart) {
    return this.http.post('https://localhost:5001/api/Cart/clearCart', model);
  }

  public CartTotal(model: Cart) {
    return this.http.post('https://localhost:5001/api/Cart/getTotal', model);
  }
}
