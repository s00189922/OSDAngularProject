import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artwork } from 'src/app/artwork';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newArtworkEvent = new EventEmitter<Artwork>();
  message: string = "";

//defining a form group with two controls
  artworkForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]), //min length 2
    year: new FormControl('', [Validators.required, Validators.max(2022)]) //max year 2022
  })

  constructor() { }

  ngOnInit(): void {
  }

//called when button is clicked
  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.artworkForm.value);
    this.newArtworkEvent.emit(this.artworkForm.value)
  }

  get title() {
    return this.artworkForm.get('title');
  }
  get year() {
    return this.artworkForm.get('year');
  }

  }
