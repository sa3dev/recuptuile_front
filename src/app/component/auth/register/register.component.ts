import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  registerFormGroup: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
   ) {
    this.registerFormGroup = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      phonenumber: new FormControl(''),
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
          type: 'user',
          phonenumber: `0${this.inputValue('phonenumber')}`,
        };

        // console.log(newObj);

        this.authService.register(newObj).subscribe((res) => {

          this.isLoading = false;
          this.registerFormGroup.reset();

          this.router.navigate(['/recup']);
        },
          err => {
            // console.log(err);
            this.isLoading = false;
            this.snackBar.open('Il y a eu une erreur dans l\'inscriptions, Réssayer', 'Fermer', {
              duration: 2500,
              verticalPosition: 'top',
              panelClass: ['snackB']
            });
          });


      } else {
        this.snackBar.open('Les mots de passe ne correspondent pas ', 'Retry', {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['snackB']
        });
        this.isLoading = false;
        this.registerFormGroup.get('password').reset();
        this.registerFormGroup.get('confirmPassword').reset();
      }
    }
  }

  inputValue(name) {
    return this.registerFormGroup.get(`${name}`).value;
  }
}
