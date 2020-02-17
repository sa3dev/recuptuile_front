import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRecupComponent } from './new-recup/new-recup.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { AllRecupComponent } from './all-recup/all-recup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecupDetailComponent } from './recup-detail/recup-detail.component';



@NgModule({
  declarations: [NewRecupComponent, HowItWorkComponent, AllRecupComponent, RecupDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NewRecupComponent, HowItWorkComponent, AllRecupComponent]
})
export class RecupModule { }
