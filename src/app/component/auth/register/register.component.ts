import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  registerFormGroup: FormGroup;

  constructor(private snackBar: MatSnackBar) {
    this.registerFormGroup = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerFormGroup.valid) {
      this.isLoading = true;

      if (this.inputValue('password') === this.inputValue('confirmPassword')) {

        const newObj = {
          full_name: this.inputValue('firstname') + '-' + this.inputValue('lastname'),
          email: this.inputValue('email'),
          password: this.inputValue('password'),
        };

        console.log('Objet to send ');
        console.log(newObj);

        setTimeout(() => {
          this.isLoading = false;
          this.snackBar.open('Simulation de connection OK ! ', 'Fermer', {
            duration: 2500,
            verticalPosition: 'top',
            panelClass: ['snackB']
          });
          this.registerFormGroup.reset();
        }, 1500);

      } else {
        this.snackBar.open('Les mots de passe ne correspondent pas ', 'Retry', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['snackB']
        });
      }
    }
  }

  inputValue(name) {
    return this.registerFormGroup.get(`${name}`).value;
  }
}
