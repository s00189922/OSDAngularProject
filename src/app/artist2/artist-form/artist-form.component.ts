import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artist } from 'src/app/artist';

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})

export class ArtistFormComponent implements OnInit {

  @Input() artist?: Artist;
  @Output() artistFormClose = new EventEmitter<Artist>();
  message: string = "";
  // artistForm? : FormGroup ;

  //defining a form group with two controls
  artistForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3)]), //min length 3
    year_born: new FormControl('', [Validators.required, Validators.max(2022)]) //max year 2022
  })

  constructor() { }

  ngOnInit(): void {
   
    //   this.artistForm = new FormGroup({
    //   first_name: new FormControl('', [Validators.required, Validators.minLength(3)]), //min length 3
    //   year_born: new FormControl('', [Validators.required, Validators.max(2022)]) //max year 2022
    // })
   
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