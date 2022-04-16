import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist2/artist-list/artist-list.component';
import { ArtistRowComponent } from './artist2/artist-row/artist-row.component';
import { ArtistFormComponent } from './artist2/artist-form/artist-form.component';
import { ArtistDetailsComponent } from './artist2/artist-details/artist-details.component';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './artist2/form/form.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';

import { JwtInterceptor } from './helpers/jwtinterceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent, 
    ArtistListComponent,
    ArtistRowComponent,
    ArtistDetailsComponent,
    FormComponent,
    ArtistFormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
   // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
