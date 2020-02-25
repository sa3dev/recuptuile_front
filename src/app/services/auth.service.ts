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
  private static ME = '/me';
  private static CHANGE_PASSWORD = '/changepassword';
  private static PASS_FORGOTTEN = '/forgottenPassword';
  private static RESET_PASS_FORGOTTEN = '/reset-password-forgotten';


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

  /**
   * Is user connected and token in storage ?
   */
  isUserTokenInStorage() {
    const user = localStorage.getItem('userToken');
    if (user ) {
      this.userSubject.next(user);
      this.isUserLoggedIn.next(true);
    } else {
      this.userSubject.next(null);
      this.isUserLoggedIn.next(false);
    }
  }

  /**
   * Return user profil with name email phone and type
   */
  getMyProfil() {
    const token = this.loclStorage.retrieve('userToken');
    if (token) {
      return this.http.get(
        AuthService.API + AuthService.ME,
        { headers: new HttpHeaders().set('Authorization' , token)}
      );
    } else {
      console.log('token not valid');
    }
  }

  /**
   *
   * @param data object with { email , newpassword }
   */
  onChangePassword(data: object) {
    const token = this.loclStorage.retrieve('userToken');
    if (token) {
      return this.http.post(
        AuthService.API + AuthService.CHANGE_PASSWORD,
        data,
        {
          headers: new HttpHeaders().set('Authorization' , token)
        }
      );
    } else {
     console.log('token not valid');
    }
  }

  onForgottenPassword(email: string) {
    return this.http.post(
      AuthService.API + AuthService.PASS_FORGOTTEN,
      {
        emailForgottenpassword: email
      },
      this.httpsOptions,
    );
  }

  onResetPaswordAfterRedirection( password: string , token: string ) {
    return this.http.post(
      AuthService.API + AuthService.RESET_PASS_FORGOTTEN,
      {
        password
      },
      {
        headers: new HttpHeaders().set('Authorization' , token)
      }
    );
  }

}
