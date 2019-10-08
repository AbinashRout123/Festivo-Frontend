import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { EditModel } from './editmodel';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id: any;
  // tslint:disable-next-line: new-parens
  model = new EditModel();
  constructor(private service: UserService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +localStorage.getItem('id');
    this.service.GetUser(this.id).subscribe(
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

  editUser(nf: NgForm) {
    console.log(nf.value);
    //console.log(this.id);
    var obj = nf.value
    obj.userId = localStorage.getItem('id')
    this.service.EditProfile(obj)
      .subscribe(
        res=>{
          console.log(res)
        },
        err=>{
          console.log(err)
        }
      );
  }

}
