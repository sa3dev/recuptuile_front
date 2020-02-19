import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {

      const newObj = {
        email: this.inputValue('email'),
        password: this.inputValue('email') ,
      };

      console.log('Obj to send ');
      console.log(newObj);

    } else {
      console.log('form not valid');
    }
  }

  inputValue(name) {
    return this.loginForm.get(`${name}`).value;
  }

}
