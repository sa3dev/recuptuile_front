import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsCustomModule } from '../component/forms/forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsCustomModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
