import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist2/artist-list/artist-list.component';
import { ArtistRowComponent } from './artist2/artist-row/artist-row.component';
import { ArtistFormComponent } from './artist2/artist-form/artist-form.component';
import { ArtistDetailsComponent } from './artist2/artist-details/artist-details.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './artist2/form/form.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';

import { JwtInterceptor } from './helpers/jwtinterceptor.service';
import { ErrorInterceptor } from './helpers/errorinterceptor';

import { ArtworkDetailsComponent } from './artwork2/artwork-details/artwork-details.component';
import { ArtworkFormComponent } from './artwork2/artwork-form/artwork-form.component';
import { ArtworkRowComponent } from './artwork2/artwork-row/artwork-row.component';
import { ArtworkListComponent } from './artwork2/artwork-list/artwork-list.component';

import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventRowComponent } from './event/event-row/event-row.component';

import { TicketRowComponent } from './ticket/ticket-row/ticket-row.component';
import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketDetailsComponent } from './ticket/ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    ArtistRowComponent,
    ArtistDetailsComponent,
    FormComponent,
    ArtistFormComponent,

    LoginComponent,
    RegisterComponent,
    UserListComponent,
    HomeComponent,

    ArtworkDetailsComponent,
    ArtworkFormComponent,
    ArtworkListComponent,
    ArtworkRowComponent,
    FormComponent,

    EventDetailsComponent,
    EventFormComponent,
    EventListComponent,
    EventRowComponent,
    FormComponent,

    TicketRowComponent,
    TicketListComponent,
    TicketDetailsComponent,
    TicketFormComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
