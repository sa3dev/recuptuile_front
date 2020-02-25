import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetFormGroup: FormGroup;
  token: string;

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
    ) {
    this.resetFormGroup = new FormGroup({
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
    }

  ngOnInit() {
    this.router.queryParams.subscribe(data => {
      if (data.t) {
        this.token = data.t;
      } else {
        this.route.navigate(['']);
      }
    });
  }

  onSubmit() {
    if (this.resetFormGroup.valid) {
      const newPassword = this.resetFormGroup.get('newPassword').value;
      const confirmPassword = this.resetFormGroup.get('confirmPassword').value;

      if ( newPassword === confirmPassword ) {
        this.authService.onResetPaswordAfterRedirection(newPassword , this.token).subscribe(
          (usertoken) => {
            localStorage.setItem('userToken' , JSON.stringify(usertoken));
            this.authService.isUserTokenInStorage();
            this.route.navigate(['/recup']);
        });
      } else {
        this.snackbar.open(
          'Les mots de passe ne correspondent pas',
          'Fermer'
        );
      }

    } else {

    }
  }

}
