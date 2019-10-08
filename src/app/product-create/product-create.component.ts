import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(public service: ProductService, private toaster: ToastrService) { }

  categories: any;

  ngOnInit() {
    this.service.GetCategory().subscribe(
      (res: any) => {
        this.categories = res;
        console.log(res);
      }
    );
  }

  onSubmit() {
    return this.service.LoadProducts().subscribe();
  }

  ProductAdded() {
    this.toaster.success('Product has been added successfully !')
  }
}
