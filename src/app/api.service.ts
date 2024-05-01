import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, Order, User, UserType, CategoryBooks } from './Models/models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:string='https://localhost:7241/api/Library/'
  constructor(private http:HttpClient,private jwt:JwtHelperService) { }

  RegisterUser(user:User){
    return this.http.post(this.baseurl+'CreateUser',user,{responseType:'text'});
  }
  LoginUser(loginInfo:any){
    var params=new HttpParams()
    .append("email",loginInfo.email)
    .append("password",loginInfo.password)
    return this.http.get(this.baseurl+'Login',{params:params,responseType:'text'});
  }
  saveToken(token:string){
    localStorage.setItem("token",token);
  }
    IsLoggedIn():boolean{
      return !!localStorage.getItem('token');
    }
    deleteToken(){
      localStorage.removeItem('token');
      location.reload();
    }
    getUserToken():User | null{
           if(!this.IsLoggedIn()) return null;
      let token=this.jwt.decodeToken();
      let user:User={
        id:token.id,
        firstName:token.firstName,
        lastName:token.lastName,
        active:token.active,
        blocked:token.blocked,
        createdOn:token.createdOn,
        email:token.email,
        password:'',
        fine:0,
        userType:token.userType,
        mobile:token.mobile
      };
      return user;
    }
    getAllBooks(){
      return this.http.get<Book[]>(this.baseurl+'GetAllBooks');
    }
    orderBook(userId:Number,bookId:number){
      return this.http.post(this.baseurl+'OrderBooks/'+userId+'/'+bookId,{responseType:'text'});
    }
    getOrder(userId:number){
      return this.http.get<Order[]>(this.baseurl+'GetOrder/'+userId);
    }
    AllOrder(){
      return this.http.get<Order[]>(this.baseurl+'AllOrders');
    }
    returnOrder(userId:any,bookId:any){
      return this.http.get(this.baseurl+'ReturnOrder/'+userId+'/'+bookId,{responseType:'text'});
    }
    getAllUsers(){
      return this.http.get<User[]>(this.baseurl+'GetAllUsers')
    }
    InsertBook(book:any){
      return this.http.post(this.baseurl+'InsertBook',book,{responseType:'text',})
    }
    DeleteBook(id:number){
      return this.http.delete(this.baseurl+'DeleteBook/'+id,{responseType:'text',});
    }
    AddCategory(category:string,subCategory:string){
      return this.http.post(this.baseurl+'AddCategories',{category:category,subCategory:subCategory},{responseType:'text',})
    }
}
