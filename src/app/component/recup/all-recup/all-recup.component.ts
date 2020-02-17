import { Component, OnInit } from '@angular/core';
import { RecupModel } from '../../../models/recup-model';
import { DATA } from '../../../models/recup-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-recup',
  templateUrl: './all-recup.component.html',
  styleUrls: ['./all-recup.component.scss']
})
export class AllRecupComponent implements OnInit {

  listRecup: RecupModel[];

  constructor( private  router: Router) { }

  ngOnInit() {
    this.listRecup = DATA;
  }

  navigateplease(itemID) {
    // le path dans le composant est relatif
    this.router.navigate(['/recup/detail' , itemID]);
  }


}
