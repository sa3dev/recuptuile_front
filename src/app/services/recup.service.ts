import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { DATA } from '../models/recup-data';

@Injectable({
  providedIn: 'root'
})
export class RecupService {

  private static API_BASE = environment.apiUrl;

  constructor() { }

  private fetchAllRecup() {

  }

  // getItemById(id) {
  //   return DATA.forEach(element => {
  //     return  id === element.id;
  //   });
  // }

  deleteRecupbyID() {
  }


}
