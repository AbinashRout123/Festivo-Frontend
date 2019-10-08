import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-departmentmanagement',
  templateUrl: './departmentmanagement.component.html',
  styleUrls: ['./departmentmanagement.component.css']
})
export class DepartmentmanagementComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute, public cat: CategoryService) { }
  id;
  category: any;
  editForm = false;
  ngOnInit() {
    this.cat.GetCategory()
      .subscribe(
        result => {
          console.log(result),
            this.category = result;
        },
        error => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    return this.cat.LoadCategory().subscribe();
  }

  deleteCategory(categoryId) {
    const ans = confirm('Are you sure you want to delete ?');
    if (ans) {
      this.id = this.category.categoryId;
      this.cat.DeleteCategory(categoryId).subscribe(() => {
        this.ngOnInit();
      });
    }
  }



  showEditForm(id) {
    this.editForm = !this.editForm;
    this.id = id
  }

  editCategory(nf: NgForm) {
    console.log(nf.value);
    
    console.log(this.id);
    return this.cat
      .UpdateCategory(this.id, nf.value)
      .subscribe();
  }
}
