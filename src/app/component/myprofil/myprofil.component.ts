import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.component.html',
  styleUrls: ['./myprofil.component.scss']
})
export class MyprofilComponent implements OnInit {

  isLoading: boolean;
  user;

  constructor(
    private authService: AuthService,
    private snackB: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.authService.getMyProfil().subscribe(user => {
      console.log(user);
      if (user) {
        this.isLoading = false;
        this.user = user;
      }
    },
    err => {
      const snackBar = this.snackB.open('Votre session a expiré veillez vous reconnecter' , 'Fermer');

      snackBar.afterDismissed().subscribe(() => {
          this.router.navigate(['/login']);
      });

    });
  }

}
