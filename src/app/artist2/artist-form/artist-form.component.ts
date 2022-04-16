import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artist } from 'src/app/artist';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})

export class ArtistFormComponent implements OnInit {

  @Input() artist?: Artist;
  @Output() artistFormClose = new EventEmitter<Artist>();
  message: string = "";
  artistForm? : FormGroup ;

  

  constructor() { }

  ngOnInit(): void {
    this.artistForm = new FormGroup({
      first_name: new FormControl(this.artist?.first_name, [Validators.required, Validators.minLength(3)]),
      year_born: new FormControl(this.artist?.year_born, [Validators.required, Validators.max(2022)])
    })
  }
   
  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.artistForm?.value);
    this.artistFormClose.emit(this.artistForm?.value)
  }

  get first_name() {
    return this.artistForm?.get('first_name');
  }
  get year_born() {
    return this.artistForm?.get('year_born');
  }

  closeForm() {
    this.artistFormClose.emit(undefined)

  }


}