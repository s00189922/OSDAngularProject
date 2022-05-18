import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtistListComponent } from './artist2/artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist2/artist-details/artist-details.component';

import { ArtworkListComponent } from './artwork2/artwork-list/artwork-list.component';

import { TicketListComponent } from './ticket/ticket-list/ticket-list.component';
import { TicketFormComponent } from './ticket/ticket-form/ticket-form.component';
import { TicketRowComponent } from './ticket/ticket-row/ticket-row.component';
import { TicketDetailsComponent } from './ticket/ticket-details/ticket-details.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserListComponent } from './user/user-list/user-list.component'

import { AuthGuard } from './core/auth.guard';
import { EventDetailsComponent } from './event/event-details/event-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'About', redirectTo: '/Home' },
  { path: 'artists', component: ArtistListComponent },

  { path: 'artworks', component: ArtworkListComponent },
  { path: 'tickets', component: TicketListComponent },
  { path: 'events', component: EventDetailsComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] }, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  //{path: 'protected',component: ProtectedComponent, canActivate:[AuthGuard]},
  //{path: '**',component: NotFoundComponent, pathMatch:'full'}//this needs to be last
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
