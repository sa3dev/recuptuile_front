import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecupModel } from '../../../models/recup-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PassageService } from '../../../services/passage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recup',
  templateUrl: './new-recup.component.html',
  styleUrls: ['./new-recup.component.css']
})
export class NewRecupComponent implements OnInit {
  durationInSeconds = 2;
  newRecupForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private passageService: PassageService,
    private router: Router    
    ) {
    this.newRecupForm = new FormGroup({
      adress: new FormControl(''),
      superficies: new FormControl(''),
      dateofpassage: new FormControl('')
    });
   }

  ngOnInit() {
  }

  openSnackBar(message: string , action: string)  {
    this.snackBar.open(message, action , {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['snackB']
    });
  }

  onSubmit() {
    if (this.newRecupForm.valid) {

      this.passageService.newPassage(this.newRecupForm.value).subscribe( (obj) => {

        // this.openSnackBar('Ajout de votre demande de récuperation, Merci !', 'Fermer');

        const snackBar = this.snackBar.open('Ajout de votre demande de récuperation, Merci !', 'Fermer', {
          duration: this.durationInSeconds * 1000,
          verticalPosition: 'top',
          panelClass: ['snackB']
        });

        snackBar.afterDismissed().subscribe(ok => {
          this.router.navigate(['/recup/all']);
        });

      },
      err => {
        console.log('Nope');
        console.log(err);
      });

    } else {
      this.openSnackBar('Erreur dans le formulaire' , 'Close');
    }
  }

}
