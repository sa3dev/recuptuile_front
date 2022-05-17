import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailLivraisonComponent } from './detail-livraison/detail-livraison.component';
import { AllLivraisonComponent } from './all-livraison/all-livraison.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [DetailLivraisonComponent , AllLivraisonComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [DetailLivraisonComponent, AllLivraisonComponent]
})
export class LivraisonModule { }
