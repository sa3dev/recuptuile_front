import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { FormsCustomModule } from '../component/forms/forms.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsCustomModule,
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
