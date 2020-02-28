import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest < any >, next: HttpHandler): Observable < HttpEvent < any >> {

    console.log('test interceptor');


    if (localStorage.getItem('userToken') != null) {

      const token = localStorage.getItem('userToken');
      const headers = new HttpHeaders().set('userToken', token);

      // clone http to the custom AuthRequest and send it to the server
      const AuthRequest = request.clone({ headers });
      return next.handle(AuthRequest);
    } else {
      return next.handle(request);
    }
  }

}
