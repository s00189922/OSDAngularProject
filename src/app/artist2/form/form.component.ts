import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artist } from 'src/app/artist';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newArtistEvent = new EventEmitter<Artist>();
  message: string = "";

//defining a form group with two controls
  artistForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3)]), //min length 3
    year_born: new FormControl('', [Validators.required, Validators.max(2022)]) //max year 2022
  })

  constructor() { }

  ngOnInit(): void {
  }

//called when button is clicked
  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.artistForm.value);
    this.newArtistEvent.emit(this.artistForm.value)
  }

  get first_name() {
    return this.artistForm.get('first_name');
  }
  get year_born() {
    return this.artistForm.get('year_born');
  }


  }
