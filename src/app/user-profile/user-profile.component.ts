import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { EditModel } from '../edit-profile/editmodel';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  model = new EditModel();
  id: any;

  constructor(private service: UserService) { }

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

}
