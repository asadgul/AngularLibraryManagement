import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserType } from './Models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
/**
 *
 */
constructor(private api:ApiService) {
   
}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     // debugger;
      if(this.api.IsLoggedIn()){
        if(this.api.getUserToken()?.userType.toString()=='ADMIN'){
          return true;
        }

      }
      return false;
  }
  
}
