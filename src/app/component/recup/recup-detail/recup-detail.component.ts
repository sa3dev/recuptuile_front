import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecupService } from '../../../services/recup.service';
import { DATA } from '../../../models/recup-data';
import { RecupModel } from 'src/app/models/recup-model';


@Component({
  selector: 'app-recup-detail',
  templateUrl: './recup-detail.component.html',
  styleUrls: ['./recup-detail.component.scss']
})
export class RecupDetailComponent implements OnInit {

  detailItem;

  constructor(
    private activeRoute: ActivatedRoute,
    private recupService: RecupService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(
      data => {
        this.detailItem = DATA.find(el => {
          return el.id === data.id;
        });
      }
    );
  }

}
