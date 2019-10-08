import { Component, OnInit } from '@angular/core';
import { CheckoutServiceService } from './checkout-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userId: any;
  constructor(public service: CheckoutServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userId = +localStorage.getItem('id');
    this.service.AddAddress(this.userId).subscribe(
      (res: any) => {
        console.log(res.saved);
        this.router.navigate(['/payment']);
      }
    );
  }

}
