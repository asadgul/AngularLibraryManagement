import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './authentication.guard';
import { OrdersComponent } from './orders/orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AuthorizationGuard } from './authorization.guard';
import { ReturnBookComponent } from './return-book/return-book.component';
import { UsersComponent } from './users/users.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';

const routes: Routes = [
  {path:'books/library', component:LibraryComponent,canActivate:[AuthenticationGuard]},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'users/my-orders', component:OrdersComponent,canActivate:[AuthenticationGuard]},
  {path:'users/all-orders',component:AllOrdersComponent,canActivate:[AuthorizationGuard]},
  {path:'users/list',component:UsersComponent,canActivate:[AuthorizationGuard]},
  {path:'books/maintenance',component:ManageBooksComponent,canActivate:[AuthorizationGuard]},
  {path:'books/categories',component:AddCategoriesComponent,canActivate:[AuthorizationGuard]}, 
  {path:'books/return',component:ReturnBookComponent,canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
