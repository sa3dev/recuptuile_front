import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassageService {

  private static API = environment.apiUrl;
  private static PASSAGE = '/passage';
  // private static ADRESS = '/adress';

  listOfpassage: any[] = [];
  allPassage: Subject<object[]> = new Subject();


  constructor(private http: HttpClient) { }

  getAllPassageOfUser() {
    const token = localStorage.getItem('userToken');
    if (token) {
      return this.http.get(
        PassageService.API + PassageService.PASSAGE ,
        { headers: new HttpHeaders().set('Authorization' , token) });
    }
  }

  newPassage(data) {
    const token = localStorage.getItem('userToken');

    console.log(token);
    console.log(data);

    if (token) {
      return this.http.post(
        PassageService.API + PassageService.PASSAGE,
        { content: data } ,
        {
          headers: new HttpHeaders().set('Authorization', token)
        }

      );
    }
  }

}
