import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id;
  model: any;

  constructor(public router: Router, public route: ActivatedRoute, public service: ProductService, private toaster: ToastrService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.service.GetProductsById(this.id).subscribe(
      (response: any) => {
        console.log('Id Captured');
        console.log(response);
        this.model = response;
      },
      error => {
        console.log('Could not capture Id');
      }
    );
  }

  editProduct(nf: NgForm) {
    console.log(nf.value);
    console.log(this.id);
    return this.service
      .UpdateProducts(this.id, nf.value)
      .subscribe();
  }

  ProductUpdated() {
    this.toaster.success('Product has been updated successfully !');
  }

}
