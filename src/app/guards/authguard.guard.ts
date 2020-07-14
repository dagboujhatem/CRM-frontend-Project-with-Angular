import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  responseData;
  constructor(private authservice: AuthService , private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const auth = this.authservice.responseData;
      if (auth === null ) {
        this.router.navigateByUrl('/login');
        return false ;
    }
      return true;
  }
  }
  
