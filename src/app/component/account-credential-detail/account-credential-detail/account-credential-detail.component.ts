import { Component, OnInit, Input, Output, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-account-credential-detail',
  templateUrl: './account-credential-detail.component.html',
  styleUrls: ['./account-credential-detail.component.css']
})
export class AccountCredentialDetailComponent implements OnInit {

  @Input() set user(value) {
    if (value) {
      this.credentialFormGroup.get('emailCurrentUser').patchValue(value.email);
      this.credentialFormGroup.get('phonenumber').patchValue(value.phonenumber);

    }
  }

  @Output() userInfoChange;

  credentialFormGroup: FormGroup;
  constructor(
    private userService: AuthService,
    private snackBar: MatSnackBar,
    private ref: ChangeDetectorRef) {


    this.credentialFormGroup = new FormGroup({
      emailCurrentUser: new FormControl({ value: '', disabled: true }),
      currentPassword: new FormControl('', [Validators.required, Validators.minLength(1)]),
      phonenumber: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, , Validators.minLength(4)]),
      confirmNewPassword: new FormControl('', [Validators.required, , Validators.minLength(4)])
    });

  }

  ngOnInit() {
  }

  getValueControls(name: string) {
    return this.credentialFormGroup.get(`${name}`).value;
  }

  onSubmit() {

    if ( this.credentialFormGroup.valid ) {

      if (this.getValueControls('newPassword') === this.getValueControls('confirmNewPassword')) {
        const newObj = {
          email: this.getValueControls('emailCurrentUser'),
          newpassword: this.getValueControls('newPassword'),
        };

        this.userService.onChangePassword(newObj).subscribe(passChanged => {
          this.snackBar.open(
            'Votre mot de passe a était changé, lors de votre prochaine connection veuillez renseigné le nouveau mot de passe ' ,
            'Fermer'
            );
        });

      }

    } else {
      this.snackBar.open('Un probleme est survenu dans la soumission du formulaire !', 'Recommencer');
      this.credentialFormGroup.reset();
    }
  }
}
