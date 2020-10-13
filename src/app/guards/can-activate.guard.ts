import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private routeService: RouteService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.authService.isUserAuthenticated(this.authService.getToken())
      .then
      (data=>{
        if(!data)
          {
            this.routeService.toLogin();
            return false;
          }
          else
          {
            return true;
          }
      })
      .catch(
        error=>{
          console.log(error);
          return false;
        }
      )
      return true;
  }
  
}
