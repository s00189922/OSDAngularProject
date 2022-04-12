import { Component, Input, OnInit } from '@angular/core';
import { Artist } from 'src/app/artist';

@Component({
  selector: 'app-artist-row',
  templateUrl: './artist-row.component.html',
  styleUrls: ['./artist-row.component.css']
})
export class ArtistRowComponent implements OnInit {

  @Input() artist: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
