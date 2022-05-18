import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../ticket'
import { TicketService } from '../../ticket.service'


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticketList: Ticket[] = [];
  message: string = "";
  showTicketForm: boolean = false;

  currentTicket?: Ticket = undefined;

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {

    this.ticketService.getTickets().subscribe({
      next: (value: Ticket[]) => this.ticketList = value,
      complete: () => console.log('ticket service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(ticket: Ticket): void {
    this.currentTicket = ticket;
    console.table(this.currentTicket)
  }

  isSelected(ticket: Ticket): boolean {
    if (!ticket || !this.currentTicket) {
      return false;
    }
    else {

      return ticket._id === this.currentTicket._id;
    }
  }

  openAddTicket(): void {
    this.currentTicket = undefined;
    this.showTicketForm = true;
  }

  openEditTicket(): void {
    this.showTicketForm = true;
  }

  addNewTicket(newTicket: Ticket): void {
    console.log('adding new ticket ' + JSON.stringify(newTicket));
    this.ticketService.addTicket({ ...newTicket })
      .subscribe({
        next: ticket => {
          console.log(JSON.stringify(ticket) + ' has been added');
          this.message = "new ticket has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears - and the component refreshes

    this.ngOnInit();


  }

  updateTicket(id: string, ticket: Ticket): void {
    console.log('updating ' + JSON.stringify(ticket));
    this.ticketService.updateTicket(id, ticket)
      .subscribe({
        next: ticket => {
          console.log(JSON.stringify(ticket) + ' has been updated');
          this.message = " ticket has been updated";
        },
        error: (err) => this.message = err
      });
    

    // so the updated list appears - and the component refreshes

    this.ngOnInit();

    this.currentTicket = undefined;
  }


  /* either the form has closed without saving or new ticket details have been
  entered or a ticket has been updated */

  ticketFormClose(ticket?: Ticket): void {
    this.showTicketForm = false;
    console.table(ticket);
    if (ticket == null) {
      this.message = "form closed without saving";
      this.currentTicket = undefined
    }
    else if (this.currentTicket == null) {
      this.addNewTicket(ticket);
    }
    else {
      this.updateTicket(this.currentTicket._id, ticket)
    }
  }

// note: Bad UX there is no check that the user wants to delete the ticket and hasn't just 
// hit the button by mistake

  deleteTicket() {
    console.log('deleting a ticket ');
    if (this.currentTicket) {
      this.ticketService.deleteTicket(this.currentTicket._id)
        .subscribe({
          next: ticket => {
            console.log(JSON.stringify(ticket) + ' has been added');
            this.message = "ticket has been deleted";
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears - and the component refreshes

    this.ngOnInit();
    this.currentTicket = undefined;

  }


  dismissAlert() {
    this.message = "";
  }

}