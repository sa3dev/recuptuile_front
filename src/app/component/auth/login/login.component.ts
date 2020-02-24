import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  loginForm: FormGroup;
  @Output() public ongLogin = new EventEmitter<FormGroup>();

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
    ) {
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
        password: this.inputValue('password') ,
      };

      this.authService.login(newObj).subscribe((res) => {

        this.isLoading = false;
        this.loginForm.reset();

        this.router.navigate(['/recup']);
      },
      err => {
        console.log(err);
        this.isLoading = false;
        this.loginForm.reset();
        this.snackBar.open('Il y a eu une erreur dans la connexion, réssayer', 'Fermer', {
          duration: 2500,
          verticalPosition: 'top',
          panelClass: ['snackB']
        });
      });

    } else {
      console.log('form not valid');
    }
  }

  inputValue(name) {
    return this.loginForm.get(`${name}`).value;
  }

}
