import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRecupComponent } from './new-recup/new-recup.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { AllRecupComponent } from './all-recup/all-recup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecupDetailComponent } from './recup-detail/recup-detail.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    NewRecupComponent,
    HowItWorkComponent,
    AllRecupComponent,
    RecupDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: "...APIFromGoogleNormalyy..."
    })
  ],
  exports: [NewRecupComponent, HowItWorkComponent, AllRecupComponent],
  providers: [MatDatepickerModule]
})
export class RecupModule {}
