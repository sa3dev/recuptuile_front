import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  userLogged: boolean;
  showPass: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.showPass = false;
  }

  onTabChanged(event) {
    // console.log(event);
  }

  showPassTab(event) {
    this.showPass = true;
  }

  onUserAction(event) {
    const decode = jwt_decode(event).role;

    switch (decode) {
      case "user":
        this.router.navigate(['/recup']);
        break;
      case "livreur":
        this.router.navigate(["/livraison"]);
        break;
      case "admin":
        this.router.navigate(['/admin'])
        break;
    }
  }
}
