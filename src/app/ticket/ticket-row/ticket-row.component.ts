import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'app-ticket-row',
  templateUrl: './ticket-row.component.html',
  styleUrls: ['./ticket-row.component.css']
})
export class TicketRowComponent implements OnInit {

  @Input() ticket?: Ticket;
  
  constructor() { }

  ngOnInit(): void {
  }

}
