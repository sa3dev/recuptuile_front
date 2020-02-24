import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject, of, Observable, Subject } from 'rxjs';
import { UserCredential, User, UserRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static API = environment.apiUrl + '/users';
  private static LOGIN = '/login';
  private static REGISTER = '/register';

  private userSubject = new BehaviorSubject<any>(null);

  isUserLoggedIn = new Subject<boolean>();

  httpsOptions =  {
    headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8')
  };

  constructor(
    private http: HttpClient,
    private loclStorage: LocalStorageService
    ) {}

  login(data: UserCredential) {
    if (this.userSubject.getValue() === null) {
      return this.http.post(
        AuthService.API + AuthService.LOGIN,
        data,
        this.httpsOptions
      ).pipe(
        map(tokenCreated => {
          this.loclStorage.store('userToken', tokenCreated);
          this.userSubject.next(tokenCreated);
          this.isUserLoggedIn.next(true);
          return tokenCreated;
        })
      );
    } else {
      return this.userSubject;
    }
  }

  register(data: UserRegister) {
    return this.http.post(
      AuthService.API + AuthService.REGISTER,
      data,
      this.httpsOptions
    ).pipe(
      map((userToken) => {
        this.loclStorage.store('userToken', userToken);
        this.userSubject.next(userToken);
        this.isUserLoggedIn.next(true);
        return userToken;
      })
    );
  }

  logout() {
    this.loclStorage.deleteStorage('userToken');
    this.userSubject.next(null);
    this.isUserLoggedIn.next(false);
  }

}
