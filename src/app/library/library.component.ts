import { Component, OnInit } from '@angular/core';
import { Book, CategoryBooks } from '../Models/models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  availableBooks:Book[]=[];
  booksToDisplay:CategoryBooks[]=[];
  displayColumns:string[]=[
    'id',
    'title',
    'price',
    'author',
    'available',
    'order'
  ];
  constructor(private api:ApiService) { }

  search(value:string){
    this.updateList();
    value=value.toLowerCase ().trim();
    if(value.length>0){
      this.booksToDisplay=this.booksToDisplay.filter((categorybook)=>{
        categorybook.books=categorybook.books.filter((book)=>
          book.title.toLowerCase().includes(value)||
          book.author.toLowerCase().includes(value)
      );
        return categorybook.books.length>0;
      });      
    }
  }
  OrderBook(book:Book){
    this.api.orderBook(this.api.getUserToken()?.id??0,book.id).subscribe({
      next:(resp:any)=>{
        if(resp==='Success'){
          book.available=false;
        }
      },error:(err:any)=>{
        console.log('error'+err);
      }
    });
  }

  ngOnInit(): void {
 this.api.getAllBooks().subscribe({
  next:(resp:Book[])=>{
    this.availableBooks=[];
    console.log(resp);
    for(var book of resp){
      this.availableBooks.push(book)
      this.updateList();
    }
  },error:(res:any)=>{
    console.log('error'+res);

  }
 });
  }
  updateList(){
    this.booksToDisplay=[];
    for(var book of this.availableBooks){
      let exist=false;
      for(var categorybook of this.booksToDisplay){
        if(book.category===categorybook.category && book.subCategory===categorybook.subCategory){
          exist=true;
        } 
      }
      if(exist){
        for(var categorybook of this.booksToDisplay){
          if(book.category===categorybook.category && book.subCategory===categorybook.subCategory){
            categorybook.books.push(book);
          } 
        }
      }
     else{
        this.booksToDisplay.push({
          category:book.category,
          subCategory:book.subCategory,
          books:[book],
        });
      }
   }
  }
  getBookCount(){
   return this.booksToDisplay.reduce((pv,cv)=>cv.books.length+pv,0);
  }

}
