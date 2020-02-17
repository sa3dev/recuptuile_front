import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from './form-contact/form-contact.component';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ButtonSubmitComponent } from './button-submit/button-submit.component';


@NgModule({
  declarations: [FormContactComponent, ButtonSubmitComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports: [FormContactComponent, ButtonSubmitComponent]
})
export class FormsCustomModule { }
