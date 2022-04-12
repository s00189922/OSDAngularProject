import { Component, OnInit } from '@angular/core';
import {Artist} from '../artist';
import { ArtistService } from '../artist.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Artist[] = [];
  message: String = ''
 

  constructor(private artistService : ArtistService) { }


  ngOnInit(): void {
    this.artistService.getArtists().subscribe({
      next: (value: Artist[]) => this.artists = value,
      complete: () => console.log('Artist service finished'),
      error: (message) => this.message =message

    }) 

  }

}