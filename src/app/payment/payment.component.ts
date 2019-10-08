import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public service: PaymentService, public toaster: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.AddPayment().subscribe(
      (response: any) => {
        console.log(response.saved);
        this.router.navigate(['/']);
      }
    );
  }

  orderPlaced() {
    this.toaster.success('We are happy to serve you 😃 ! Your order has been placed successfully 😊');
  }
}
