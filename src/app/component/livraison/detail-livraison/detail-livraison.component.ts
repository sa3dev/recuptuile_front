import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: "app-detail-livraison",
  templateUrl: "./detail-livraison.component.html",
  styleUrls: ["./detail-livraison.component.scss"]
})
export class DetailLivraisonComponent implements OnInit {

  @Input() livraison;

  constructor() {}

  ngOnInit() {}
}
