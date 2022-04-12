import { Component, OnInit } from '@angular/core';
import { Artist } from '../../artist'
import { ArtistService  }  from '../../artist.service'


@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistList: Artist[] = [];
  message: string = "";

  currentArtist! : Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {


    this.artistService.getArtists().subscribe({
      next: (value: Artist[] )=> this.artistList = value,
      complete: () => console.log('artist service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (artist: Artist): void {
    this.currentArtist = artist;
  }

}
