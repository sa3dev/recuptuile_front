import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PassageService } from '../../../services/passage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-recup',
  templateUrl: './all-recup.component.html',
  styleUrls: ['./all-recup.component.scss']
})
export class AllRecupComponent implements OnInit , OnDestroy {

  listRecup: any = [];
  error = null;
  private recupSub: Subscription;

  constructor(private router: Router, private passageService: PassageService) { }

  ngOnInit() {
    this.recupSub = this.passageService.getAllPassageOfUser().subscribe(items => {
      this.listRecup = items;
    }, (err) => {
      this.error = err;
    });
  }

  navigateplease(itemID) {
    // le path dans le composant est relatif
    this.router.navigate(['/recup/detail' , itemID]);
  }

  ngOnDestroy() {
    this.recupSub.unsubscribe();
  }

}
