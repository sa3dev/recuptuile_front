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


@NgModule({
  declarations: [
    AppComponent,
    RecupComponent,
    // AllRecupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsCustomModule,
    HomeModule,
    AboutModule,
    ContactModule,
    RecupModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
