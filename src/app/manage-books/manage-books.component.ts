import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.scss']
})
export class ManageBooksComponent implements OnInit {
  addBookForm: FormGroup;
  deleteBookForm: FormControl;
  addMsg: string = '';
  delMsg: string = '';
  constructor(private fb: FormBuilder, private api: ApiService) {
    this.addBookForm = fb.group({
      title: fb.control('', [Validators.required]),
      author: fb.control('', [Validators.required]),
      category: fb.control('', [Validators.required]),
      subcategory: fb.control('', [Validators.required]),
      price: fb.control('', [Validators.required]),
    });
    this.deleteBookForm = fb.control('', [Validators.required]);
  }

  insertBook() {
    let book = {
      id: 0,
      title: this.Title.value,
      category: {
        category: this.Category.value,
        subCategory: this.Subcategory.value,
      },
      price: this.Price.value,
      available: true,
      author: this.Author.value,
    };
    this.api.InsertBook(book).subscribe({
      next: (res: any) => {
        console.log('respo '+res)       
        setInterval(() => (this.addMsg = ''), 5000);
        debugger
        if(res==='Book Inserted'){
          this.addMsg = 'New Book Has been added';
          this.Title.setValue('');
          this.Author.setValue('');
          this.Category.setValue('');
          this.Subcategory.setValue('');
          this.Price.setValue('');
  
        }
      },
      error: (err: any) => console.log(err),
    });
  }

  deleteBook() {
    let id: number = parseInt(this.deleteBookForm.value);

    this.api.DeleteBook(id).subscribe({
      next: (res: any) => {
        if (res === 'success') {
          this.delMsg = 'Book Deleted';
        } else {
          this.delMsg = 'Book not found!';
        }
        setInterval(() => (this.delMsg = ''), 5000);
      },
      error: (err: any) => console.log(err),
    });
  }

  get Title(): FormControl {
    return this.addBookForm.get('title') as FormControl;
  }
  get Author(): FormControl {
    return this.addBookForm.get('author') as FormControl;
  }
  get Category(): FormControl {
    return this.addBookForm.get('category') as FormControl;
  }
  get Subcategory(): FormControl {
    return this.addBookForm.get('subcategory') as FormControl;
  }
  get Price(): FormControl {
    return this.addBookForm.get('price') as FormControl;
  }
  ngOnInit(): void {
    
  }


}
