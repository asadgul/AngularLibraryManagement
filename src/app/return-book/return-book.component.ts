import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.scss']
})
export class ReturnBookComponent implements OnInit {

  status:string='';
  bookForm:FormGroup;
  constructor(private api:ApiService,private fb:FormBuilder) { 
    this.bookForm = this.fb.group({
      bookId: fb.control('', [Validators.required]),
      userId: fb.control('', [Validators.required]),
    });


  }
  returnBook(){
    let book=(this.bookForm.get('bookId')as FormControl).value;
    let user=(this.bookForm.get('userId')as FormControl).value;
    this.api.returnOrder(user,book).subscribe({
      next:(resp:any)=>{
        console.log('status is'+resp);        
        this.status=resp;
      }
    });

  }

  ngOnInit(): void {
  }

}
