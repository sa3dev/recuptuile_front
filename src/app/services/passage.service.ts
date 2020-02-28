import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassageService {

  private static API = environment.apiUrl;
  private static PASSAGE = '/passage';

  listOfpassage: any[] = [];
  allPassage: BehaviorSubject<any[]> = new BehaviorSubject(null);


  constructor(private http: HttpClient) { }

  getAllPassageOfUser() {
    const token = localStorage.getItem('userToken');
    if (token) {
      if (this.allPassage.getValue() !== null) {
        return this.allPassage;
      } else {
        return this.http.get(
        PassageService.API + PassageService.PASSAGE ,
        { headers: new HttpHeaders().set('Authorization' , token) }).pipe(
          tap((items: any[]) => this.allPassage.next(items))
        );
      }
    }
  }

  newPassage(data) {
    const token = localStorage.getItem('userToken');

    console.log(token);
    console.log(data);

    if (token) {
      return this.http.post(
        PassageService.API + PassageService.PASSAGE,
        data,
        {
          headers: new HttpHeaders().set('Authorization', token)
        }

      );
    }
  }

}
