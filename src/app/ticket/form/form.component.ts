import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() newTicketEvent = new EventEmitter<Ticket>();
  message: string = "";

//defining a form group with controls
  ticketForm: FormGroup = new FormGroup({
    event_type: new FormControl('', [Validators.required, Validators.minLength(3)]),
    ticket_type: new FormControl('', [Validators.required, Validators.minLength(4)]),
    date: new FormControl('', [Validators.required, Validators.max(2025)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.ticketForm.value);
    this.newTicketEvent.emit(this.ticketForm.value)
  }

  get ticket_type() {
    return this.ticketForm.get('ticket_type');
  }
  get event_type() {
    return this.ticketForm.get('event_type');
  }
  get date() {
    return this.ticketForm.get('date');
  }



}
