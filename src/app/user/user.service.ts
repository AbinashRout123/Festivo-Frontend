import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  reg: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:5001/api';

  formModel = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: [''],
    Email: ['', Validators.email],
    Password: ['', Validators.required],
    Contact: [''],
    Gender: [''],
    Role: ['']
  });

  formModelLogin = this.fb.group({
    Email: ['', Validators.required],
    Password: ['']
  });

  Register() {

    const reg = {
      FirstName: this.formModel.value.FirstName,
      LastName: this.formModel.value.LastName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password,
      Contact: this.formModel.value.Contact,
      Gender: this.formModel.value.Gender,
      Role: this.formModel.value.Role,
    };

    return this.http.post(this.BaseURI + '/Register', reg);
  }

  login() {
    const body1 = {
      Email: this.formModelLogin.value.Email,
      Password: this.formModelLogin.value.Password
    };
    return this.http.post(this.BaseURI + '/Login', body1);
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  isAdminAuthenticated() {
    if (localStorage.getItem('userRole') === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  EditProfile( body: any) {
    return this.http.put('https://localhost:5001/api/Register' , body);
  }

  GetUser(id: number) {
    return this.http.get('https://localhost:5001/api/Register/' + id);
  }
  SocialLogin(object) {
    return this.http.post('https://localhost:5001/api/Login/social' , object);
  }
}
