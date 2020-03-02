import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userLogged;
  userRole: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router
    ) {
      // subject isUserLoggedIn ?
      this.authService.isUserLoggedIn.subscribe(res => {
        this.userLogged = res;
        if ( localStorage.getItem('userToken')) {
          this.userRole = jwt_decode(localStorage.getItem("userToken")).role;
        }
      });

      this.authService.isUserTokenInStorage();
  }

  logout() {
    this.router.navigate(['']);
    this.userRole = '';
    this.authService.logout();
  }
}
