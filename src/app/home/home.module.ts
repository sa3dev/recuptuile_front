import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatStepperModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
