import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  pass: boolean;

  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService,
    private router: Router ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.storageService.retrieve('userToken');
    const isConnected = (token !== null && token.length > 0) ? true : false;
    if (!isConnected) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
