import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup;

  constructor(private snackBar: MatSnackBar) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;

      const newObj = {
        email: this.inputValue('email'),
        password: this.inputValue('email') ,
      };

      console.log('Obj to send ');
      console.log(newObj);

      setTimeout(() => {
        this.isLoading = false;
        this.snackBar.open('Simulation d\'inscriptions OK ! ', 'Fermer', {
          duration: 2500,
          verticalPosition: 'top',
          panelClass: ['snackB']
        });

        this.loginForm.reset();
      }, 1500);

    } else {
      console.log('form not valid');
    }
  }

  inputValue(name) {
    return this.loginForm.get(`${name}`).value;
  }

}
