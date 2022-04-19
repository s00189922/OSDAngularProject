import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistListComponent } from './artist2/artist-list/artist-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {HomeComponent} from './home/home.component';
import {UserListComponent} from './user/user-list/user-list.component'
import { FormComponent } from './artist2/form/form.component';
import { ArtistDetailsComponent } from './artist2/artist-details/artist-details.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home',component: HomeComponent},
  {path: 'About',redirectTo: '/Home'},
  {path: 'form',component: FormComponent},
  //{path: 'ListArtists',component: ListArtistComponent},
  {path: 'artist/:id',component: ArtistDetailsComponent},
  {path: 'artists',component: ArtistListComponent},
  {path: 'users', component: UserListComponent,  canActivate: [AuthGuard]},
  //{path: 'users', component: UserListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //{path: 'protected',component: ProtectedComponent, canActivate:[AuthGuard]},
  //{path: '**',component: NotFoundComponent, pathMatch:'full'}//this needs to be last
];

@NgModule({
  declarations:[],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
