import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecupModel } from '../../../models/recup-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-recup',
  templateUrl: './new-recup.component.html',
  styleUrls: ['./new-recup.component.css']
})
export class NewRecupComponent implements OnInit {
  durationInSeconds = 20;
  newRecupForm: FormGroup;

  constructor( private  snackBar: MatSnackBar ) {
    this.newRecupForm = new FormGroup({
      adress: new FormControl(''),
      superfices: new FormControl(''),
      dateofpassage: new FormControl('' )
    });
   }

  ngOnInit() {
  }

  getValueForm(stringVal) {
    return this.newRecupForm.get(`${stringVal}`).value;
  }

  openSnackBar(message: string , action: string)  {
    this.snackBar.open(message, action , {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['test']
    });
  }

  onSubmit() {
    if (this.newRecupForm.valid) {

      const adress = this.getValueForm('adress');
      const space = this.getValueForm('superfices');
      const dateChosen = this.getValueForm('dateofpassage');

      const newObjToSend: RecupModel = {
        adress,
        superfices: space,
        dateofpassage: dateChosen,
      };

      console.log('Obj to send api ' + newObjToSend );

    } else {
      this.openSnackBar('Erreur dans le formulaire' , 'Close');
    }
  }

}
