import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { FormsCustomModule } from './component/forms/forms.module';
import { RecupModule } from './component/recup/recup.module';


import { RecupComponent } from './recup/recup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './component/auth/auth.module';
import { AccountCredentialDetailModule } from './component/account-credential-detail/account-credential-detail.module';
import { MyprofilModule } from './component/myprofil/myprofil.module';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecupComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,

    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,

    FormsCustomModule,
    HomeModule,
    AboutModule,
    ContactModule,
    RecupModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    AccountCredentialDetailModule,
    MyprofilModule
  ],
  providers: [
    // {
    // provide: HTTP_INTERCEPTORS,
    // useClass: AuthInterceptorService,
    // multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
