import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecupComponent } from './recup/recup.component';
import { AllRecupComponent } from './component/recup/all-recup/all-recup.component';
import { NewRecupComponent } from './component/recup/new-recup/new-recup.component';
import { HowItWorkComponent } from './component/recup/how-it-work/how-it-work.component';
import { RecupDetailComponent } from './component/recup/recup-detail/recup-detail.component';
import { AuthComponent } from './component/auth/auth.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'login', component: AuthComponent },
  // { path: 'contact' , component: ContactComponent },

  {
    path: 'recup' , component: RecupComponent ,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllRecupComponent},
      { path: 'new-recup' , component: NewRecupComponent },
      { path: 'how-it-work', component: HowItWorkComponent },
      { path: 'detail/:id', component: RecupDetailComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
