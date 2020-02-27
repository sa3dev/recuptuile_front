import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassageService } from '../../../services/passage.service';
import { filter, tap, find } from 'rxjs/operators';


@Component({
  selector: 'app-recup-detail',
  templateUrl: './recup-detail.component.html',
  styleUrls: ['./recup-detail.component.scss']
})
export class RecupDetailComponent implements OnInit {

  detailItem;

  constructor(
    private activeRoute: ActivatedRoute,
    private passageService: PassageService) { }

    ngOnInit() {

    this.activeRoute.params.subscribe(
      data => {
        console.log(+data.id);

        this.passageService.getAllPassageOfUser()
        .subscribe(items => {
          this.detailItem = items;
        });

      }
    );
  }

}
