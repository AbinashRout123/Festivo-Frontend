import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class CategoryService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  formModelCategory = this.fb.group({
    CategoryName: ['', Validators.required],
  });

  public LoadCategory() {
    const body = {
      CategoryName: this.formModelCategory.value.CategoryName,
    };
    console.log(this.formModelCategory.value);
    return this.http.post('https://localhost:5001/api/Categories', body);
  }

  public GetCategory() {
    return this.http.get('https://localhost:5001/api/Categories');
  }

  public GetCategoryById(id: number) {
    return this.http.get('https://localhost:5001/api/Categories/' + id);
  }

  public UpdateCategory(id: number, body: any) {
    return this.http.put('https://localhost:5001/api/Categories/' + id, body);
  }

  public DeleteCategory(categoryId: any) {
    return this.http.delete('https://localhost:5001/api/Categories/' + categoryId);
  }
}
