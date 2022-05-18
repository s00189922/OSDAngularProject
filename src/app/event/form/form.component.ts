import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from 'src/app/event';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newEventEvent = new EventEmitter<Event>();
  message: string = "";

//defining a form group with controls
  eventForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    start_date: new FormControl('', [Validators.required, Validators.max(2022)]),
    end_date: new FormControl('', [Validators.required, Validators.max(2022)])

  })

  constructor() { }

  ngOnInit(): void {
  }

  //called when button is clicked
  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.eventForm.value);
    this.newEventEvent.emit(this.eventForm.value)
  }

  get title() {
    return this.eventForm.get('title');
  }
  get start_date() {
    return this.eventForm.get('start_date');
  }
  get end_date() {
    return this.eventForm.get('end_date');
  }


}
