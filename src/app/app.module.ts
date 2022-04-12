import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist2/artist-list/artist-list.component';
import { ArtistRowComponent } from './artist2/artist-row/artist-row.component';
import { ArtistDetailsComponent } from './artist2/artist-details/artist-details.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormComponent } from './artist2/form/form.component';

//import { SampleFormComponent } from './book2/sample-form/sample-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistListComponent,
    ArtistRowComponent,
    ArtistDetailsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
