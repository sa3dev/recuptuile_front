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

  // get all passage of user
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

  // create a new livraison or demande of passage
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

  getOnepassage(index: number) {
    const token = localStorage.getItem('userToken');

    if (this.allPassage.getValue() !== null) {
      console.log(this.allPassage[index]);
      return this.allPassage[index];
    } else {
      return this.http.get(
        PassageService.API + PassageService.PASSAGE,
        { headers: new HttpHeaders().set('Authorization', token) }).pipe(
          tap((items: any[]) => this.allPassage.next(items))
        ).pipe(
          tap(x => console.log(x))
        );
    }
    // return this.allPassage[index];
  }

}
