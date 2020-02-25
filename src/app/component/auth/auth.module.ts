import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule, MatButtonModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PasswordForgottenComponent } from './password-forgotten/password-forgotten.component';



@NgModule({
  declarations: [
    AuthComponent ,
    LoginComponent ,
    RegisterComponent,
    PasswordForgottenComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent ,
    PasswordForgottenComponent
  ]
})
export class AuthModule { }
