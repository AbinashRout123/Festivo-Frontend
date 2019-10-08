import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    nameOnCard: ['', Validators.required],
    cardNumber: ['', Validators.required],
    monthOfExpiry: ['', Validators.required],
    yearOfExpiry: ['', Validators.required],
    cvv: ['', Validators.required],

  });

  public AddPayment() {
    const body = {
      NameOnCard: this.formModel.value.nameOnCard,
      CardNumber: this.formModel.value.cardNumber,
      MonthOfExpiry: this.formModel.value.monthOfExpiry,
      YearOfExpiry: this.formModel.value.yearOfExpiry,
      CVV: this.formModel.value.cvv,
    };
    return this.http.post('https://localhost:5001/api/Payments', body);
  }

  public GetPayment() {
    return this.http.get('https://localhost:5001/api/Payments');
  }
}
