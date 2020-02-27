import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassageService {

  private static API = environment.apiUrl + '/passage';

  listOfpassage: any[] = [];
  allPassage: Subject<object[]> = new Subject();


  constructor(private http: HttpClient) { }

  getAllPassageOfUser() {
    const token = localStorage.getItem('userToken');
    if (token) {
      return this.http.get(
        PassageService.API ,
        { headers: new HttpHeaders().set('Authorization' , token) });
    }
  }

}
