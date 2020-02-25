import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
      emailPassForgotten: new FormControl(''),
    });
  }


  ngOnInit() {
  }

  onReturn() {
    this.closePassForgotten.emit();
  }

  onSubmit() {
    if (this.passFormGroup.valid) {

      const email = this.passFormGroup.get('emailPassForgotten').value;
      console.log(email);

      this.authService.onForgottenPassword( email ).subscribe(ok => {
        console.log('IN SUBSCRIBEE ');
        console.log(ok);
      },
      (err) => {
        console.log(err);
      });
      setTimeout(() => {
        this.closePassForgotten.emit();
      }, 600);
    }

  }

}
