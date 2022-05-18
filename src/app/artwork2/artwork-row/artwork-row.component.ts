import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from 'src/app/artwork';

@Component({
  selector: 'app-artwork-row',
  templateUrl: './artwork-row.component.html',
  styleUrls: ['./artwork-row.component.css']
})
export class ArtworkRowComponent implements OnInit {

  @Input() artwork?: Artwork;

  constructor() { }

  ngOnInit(): void {
  }

}
