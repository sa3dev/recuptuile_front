import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-myprofil',
  templateUrl: './myprofil.component.html',
  styleUrls: ['./myprofil.component.scss']
})
export class MyprofilComponent implements OnInit {

  isLoading: boolean;
  user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    this.authService.getMyProfil().subscribe(user => {
      console.log(user);
      if (user) {
        this.isLoading = false;
        this.user = user;
      }
    },
    err =>{
      console.log('Il ya eu une erreur de type ');
      console.log(err);
    });
  }

}
