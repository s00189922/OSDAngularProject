import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})

export class EventFormComponent implements OnInit {

  @Input() event?: Event;
  @Output() eventFormClose = new EventEmitter<Event>();
  message: string = "";
  eventForm?: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl(this.event?.title, [Validators.required, Validators.minLength(2)]), //min length 2
      start_date: new FormControl(this.event?.start_date, [Validators.required, Validators.max(2022)]), //max year 2022
      end_date: new FormControl(this.event?.end_date, [Validators.required, Validators.max(2022)]) //max year 2022
    })
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.eventForm?.value);
    this.eventFormClose.emit(this.eventForm?.value)
  }

  get title() {
    return this.eventForm?.get('title');
  }
  get start_date() {
    return this.eventForm?.get('start date');
  }
  get end_date() {
    return this.eventForm?.get('end date');
  }
  closeForm() {
    this.eventFormClose.emit(undefined)

  }


}