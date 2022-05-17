import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor( ) { }

  store( name: string , data ) {
    localStorage.setItem(name , data);
  }

  retrieve( name: string ) {
    return localStorage.getItem(name);
  }

  deleteStorage(name: string ) {
    localStorage.removeItem(name);
  }

}
