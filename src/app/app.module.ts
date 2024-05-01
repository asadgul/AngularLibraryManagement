import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialmodule/material-module';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagefooterComponent } from './pagefooter/pagefooter.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { OrdersComponent } from './orders/orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ReturnBookComponent } from './return-book/return-book.component';
import { UsersComponent } from './users/users.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
@NgModule({
  declarations: [
    AppComponent,
    PageheaderComponent,
    PagefooterComponent,
    SideNavComponent,
    LibraryComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    AllOrdersComponent,
    ReturnBookComponent,
    UsersComponent,
    ManageBooksComponent,
    AddCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
