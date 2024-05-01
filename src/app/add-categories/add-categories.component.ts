import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { CategoryBooks } from '../Models/models';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss']
})
export class AddCategoriesComponent implements OnInit {
  categoryForm: FormGroup;
  msg: string = '';

  constructor(private fb: FormBuilder, private api:ApiService) {
    this.categoryForm = this.fb.group({
      category: this.fb.control(''),
      subcategory: this.fb.control(''),
    });
  }

  addNewCategory() {
    let c = this.Category.value;
    let s = this.Subcategory.value;

    this.api.AddCategory(c,s).subscribe({
      next: (res: any) => {
        this.msg = res.toString();
        setInterval(() => (this.msg = ''), 5000);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  get Category(): FormControl {
    return this.categoryForm.get('category') as FormControl;
  }
  get Subcategory(): FormControl {
    return this.categoryForm.get('subcategory') as FormControl;
  }
  ngOnInit(): void {
  }

}
