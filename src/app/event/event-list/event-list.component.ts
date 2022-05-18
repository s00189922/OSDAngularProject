import { Component, OnInit } from '@angular/core';
import { Event } from '../../event'

import { EventService } from '../../event.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  //properties
  eventList: Event[] = [];
  message: string = "";
  showEventForm: boolean = false;

  currentEvent?: Event = undefined;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {

    this.eventService.getEvents().subscribe({
      next: (value: Event[]) => this.eventList = value,
      complete: () => console.log('event service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(event: Event): void {
    this.currentEvent = event;
    console.table(this.currentEvent)
  }

  isSelected(event: Event): boolean {
    if (!event || !this.currentEvent) {
      return false;
    }
    else {

      return event._id === this.currentEvent._id;
    }
  }

  //Method
  openAddEvent(): void {
    this.currentEvent = undefined;
    this.showEventForm = true;
  }//End of Method

  //Method
  openEditEvent(): void {
    this.showEventForm = true;
  }//End of Method

  //Method which takes the data entered and uses the service to send it to the API
  addNewEvent(newEvent: Event): void {
    console.log('adding new event ' + JSON.stringify(newEvent));
    this.eventService.addEvent({ ...newEvent })
      .subscribe({
        next: event => {
          console.log(JSON.stringify(event) + ' has been added');
          this.message = "new Event has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears - and the component refreshes

    this.ngOnInit();
  }//End of Method


  updateEvent(id: string, event: Event): void {
    console.log('updating ' + JSON.stringify(event));
    this.eventService.updateEvent(id, event)
      .subscribe({
        next: event => {
          console.log(JSON.stringify(event) + ' has been updated');
          this.message = " event has been updated";
        },
        error: (err) => this.message = err
      });
   // so the updated list appears

    this.ngOnInit();

    this.currentEvent = undefined;
  }


  /* either the form has closed without saving or new Event details have been
  entered or a Event has been updated */

  eventFormClose(event?: Event): void {
    this.showEventForm = false;
    console.table(event);
    if (event == null) {
      this.message = "form closed without saving";
      this.currentEvent = undefined
    }
    else if (this.currentEvent == null) {
      this.addNewEvent(event);
    }
    else {
      this.updateEvent(this.currentEvent._id, event)
    }
  }

  // note: Bad UX there is no check that the user wants to delete the Event and hasn't just 
  // hit the button by mistake

  deleteEvent() {
    console.log('deleting a Event ');
    if (this.currentEvent) {
      this.eventService.deleteEvent(this.currentEvent._id)
        .subscribe({
          next: event => {
            console.log(JSON.stringify(event) + ' has been added');
            this.message = "Event has been deleted";
          },
          error: (err) => this.message = err
        });
    }

  // so the updated list appears  - and the component refreshes

    this.ngOnInit();
    this.currentEvent = undefined;

  }


  dismissAlert() {
    this.message = "";
  }

}
