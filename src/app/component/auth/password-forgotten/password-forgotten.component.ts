import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.scss']
})
export class PasswordForgottenComponent implements OnInit {

  passFormGroup: FormGroup;
  @Output() closePassForgotten = new EventEmitter<void>();

  constructor(
    private authService: AuthService
  ) {
    this.passFormGroup = new FormGroup({
      emailPassForgotten: new FormControl('' , Validators.required),
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.passFormGroup.valid) {

      const obj = this.passFormGroup.get('emailPassForgotten').value;

      // this.authService.sendMailForPassword().subscribe(ok => {
      // });

    } else { 

    }
  }

}
