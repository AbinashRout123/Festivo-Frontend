import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';


@Injectable()
export class ProductService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModelProduct = this.fb.group({
    ProductName: ['', Validators.required],
    ProductImage: [''],
    ProductDescription: [''],
    ProductPrice: [''],
    Quantity: [''],
    CategoryId: ['']
  });

  public GetCategory() {
    return this.http.get('https://localhost:5001/api/Categories');
  }

  public LoadProducts() {
    const body = {
      ProductName: this.formModelProduct.value.ProductName,
      ProductImage: this.formModelProduct.value.ProductImage,
      ProductDescription: this.formModelProduct.value.ProductDescription,
      ProductPrice: this.formModelProduct.value.ProductPrice,
      Quantity: this.formModelProduct.value.Quantity,
      CategoryId: this.formModelProduct.value.CategoryId
    };
    console.log(this.formModelProduct.value);

    return this.http.post('https://localhost:5001/api/Product', body);
  }


   public GetProducts() {
    return this.http.get('https://localhost:5001/api/Product');
  }

  public GetProductsById(id: number) {
    return this.http.get('https://localhost:5001/api/Product/' + id);
  }

  public GetProductsByCategoryId(id: number) {
    return this.http.get('https://localhost:5001/api/Product/getproductsbycategoryid/' + id);
  }

  public UpdateProducts(id: number, body: any) {
    return this.http.put('https://localhost:5001/api/Product/' + id , body );
  }

  public DeleteProducts(productId: any) {
    return this.http.delete('https://localhost:5001/api/Product/' + productId);
  }
}





