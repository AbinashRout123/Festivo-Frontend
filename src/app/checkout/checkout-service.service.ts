import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModel = this.fb.group({
    userId: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    state: ['', Validators.required],
    city: ['', Validators.required],
    pinCode: ['', Validators.required],
    phoneNumber: ['', Validators.required]
  });

  public AddAddress(id: number) {
    const body = {
      UserId: null,
      FirstName: this.formModel.value.firstName,
      LastName: this.formModel.value.lastName,
      Email: this.formModel.value.email,
      Address: this.formModel.value.address,
      State: this.formModel.value.state,
      City: this.formModel.value.city,
      PinCode: this.formModel.value.pinCode,
      PhoneNumber: this.formModel.value.phoneNumber
    };

    console.log(body);
    body.UserId = id;
    return this.http.post('https://localhost:5001/api/Checkouts', body);
  }

  public GetAddress() {
    return this.http.get('https://localhost:5001/api/Checkouts');

  }
}
