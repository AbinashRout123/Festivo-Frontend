import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute, public cat: CategoryService, private toaster: ToastrService) { }
  id;
  category: any;

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

  AddCategory() {
    this.toaster.success('Category has been added successfully !');
    this.router.navigate(['/admin/product']);
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



}
