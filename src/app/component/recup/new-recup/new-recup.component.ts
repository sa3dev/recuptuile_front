import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recup',
  templateUrl: './new-recup.component.html',
  styleUrls: ['./new-recup.component.css']
})
export class NewRecupComponent implements OnInit {

  newRecupForm: FormGroup;

  constructor() {
    this.newRecupForm = new FormGroup({
      adress: new FormControl('', [Validators.required]),
      superfices: new FormControl('', [Validators.required]),
      dateofpassage: new FormControl('' , [Validators.required])
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.newRecupForm.valid) {
      console.log(this.newRecupForm.value);
      
    } else {

    }
  }

}
