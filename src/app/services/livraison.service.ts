import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  private static API = environment.apiUrl + '/livraison';

  allDeliveries: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  getDeliveryByUser() {
    if ( this.allDeliveries.getValue() === null) {

      const token = localStorage.getItem('userToken');

      if (token) {
        const id = jwt_decode(localStorage.getItem("userToken")).id;
        return this.http.get(
          LivraisonService.API + `/${id}`,
          {
            headers: new HttpHeaders().set('Authorization', token)
          }
          ).pipe(
            tap(items => this.allDeliveries.next(items) )
          );
      }
    } else {
      return this.allDeliveries.asObservable();
    }
  }

}
