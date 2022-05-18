import { Component,Input, OnInit } from '@angular/core';
import { Artwork } from 'src/app/artwork';
@Component({
  selector: 'app-artwork-details',
  templateUrl: './artwork-details.component.html',
  styleUrls: ['./artwork-details.component.css']
})
export class ArtworkDetailsComponent implements OnInit {

@Input() artwork? : Artwork;

  constructor() { }

  ngOnInit(): void {
  }

}
