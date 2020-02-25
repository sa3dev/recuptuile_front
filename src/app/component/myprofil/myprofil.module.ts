import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccountCredentialDetailComponent 
} from '../account-credential-detail/account-credential-detail/account-credential-detail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { AccountCredentialDetailModule } from '../account-credential-detail/account-credential-detail.module';
import { MyprofilComponent } from './myprofil.component';



@NgModule({
  declarations: [MyprofilComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule,
    AccountCredentialDetailModule,
  ],
  exports: [MyprofilComponent]
})
export class MyprofilModule { }
