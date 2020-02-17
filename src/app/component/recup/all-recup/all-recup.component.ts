import { Component, OnInit } from '@angular/core';
import { RecupModel } from '../../../models/recup-model';
import { DATA } from '../../../models/recup-data';

@Component({
  selector: 'app-all-recup',
  templateUrl: './all-recup.component.html',
  styleUrls: ['./all-recup.component.scss']
})
export class AllRecupComponent implements OnInit {

  listRecup: RecupModel[];

  constructor() { }

  ngOnInit() {
    this.listRecup = DATA;
  }

}
