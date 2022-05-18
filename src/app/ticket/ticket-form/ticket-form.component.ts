import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  @Input() ticket?: Ticket;
  @Output() ticketFormClose = new EventEmitter<Ticket>();
  message: string = "";
  // ticketForm? : FormGroup  ;
  
  ticketForm: FormGroup = new FormGroup({
    ticket_type: new FormControl(this.ticket?.ticket_type, [Validators.required, Validators.minLength(4)]), //Min Length 4
    event_type: new FormControl(this.ticket?.event_type, [Validators.required, Validators.minLength(3)]), //Min Length 3
    date: new FormControl(this.ticket?.date, [Validators.required, Validators.max(2025)]) //Max Year 2025
  })
  

  constructor() { }

  ngOnInit(): void {}
  

  onSubmit() {
    console.log('forms submitted with ');
    console.table(this.ticketForm?.value);
    this.ticketFormClose.emit(this.ticketForm?.value)
  }

  get ticket_type() {
    return this.ticketForm?.get('ticket_type');
  }
  get event_type() {
    return this.ticketForm?.get('event_type');
  }

  get date() {
    return this.ticketForm?.get('date');
  }

  closeForm() {
    this.ticketFormClose.emit(undefined)

  }


}
