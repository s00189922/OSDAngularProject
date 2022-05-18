import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Artwork } from 'src/app/artwork';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-artwork-form',
  templateUrl: './artwork-form.component.html',
  styleUrls: ['./artwork-form.component.css']
})

export class ArtworkFormComponent implements OnInit {

  @Input() artwork?: Artwork;
  @Output() artworkFormClose = new EventEmitter<Artwork>();
  message: string = "";
   artworkForm? : FormGroup ;

  // artworkForm: FormGroup = new FormGroup({
  //   title: new FormControl(this.artwork?.title, [Validators.required, Validators.minLength(2)]), //min length 2
  //   year: new FormControl(this.artwork?.year, [Validators.required, Validators.max(2022)]) //max year 2022
  // })

  constructor() { }

  ngOnInit(): void {
    this.artworkForm = new FormGroup({
      title: new FormControl(this.artwork?.title, [Validators.required, Validators.minLength(2)]), //min length 2
      year: new FormControl(this.artwork?.year, [Validators.required, Validators.max(2022)]) //max year 2022
    })
  }
   
  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.artworkForm?.value);
    this.artworkFormClose.emit(this.artworkForm?.value)
  }

  get title() {
    return this.artworkForm?.get('title');
  }
  get year() {
    return this.artworkForm?.get('year');
  }

  closeForm() {
    this.artworkFormClose.emit(undefined)

  }


}