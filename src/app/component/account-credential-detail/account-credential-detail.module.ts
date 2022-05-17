import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCredentialDetailComponent } from './account-credential-detail/account-credential-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { 
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AccountCredentialDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [AccountCredentialDetailComponent]
})
export class AccountCredentialDetailModule { }
