import { Component, OnInit, Input } from '@angular/core';
import { LivraisonService } from '../../../services/livraison.service';

@Component({
  selector: 'app-all-livraison',
  templateUrl: './all-livraison.component.html',
  styleUrls: ['./all-livraison.component.scss']
})
export class AllLivraisonComponent implements OnInit {
   allLivraison = [
    {
      id: 15,
      adress: "12 rue de la paix",
      superficies: 23,
      dateofpassage: "2020-02-14T23:00:00.000Z",
    },
    {
      id: 17,
      adress: "23 rue de l'espoir",
      superficies: 80,
      dateofpassage: "2020-02-28T23:00:00.000Z",
    },
  ];
  constructor(private livraisonService: LivraisonService) { }

  ngOnInit() {
    this.livraisonService.getDeliveryByUser().subscribe(items => {
      console.log(items);

      console.log('test on Alldeliveries');

    });
  }

}
