import { Component,Input, OnInit } from '@angular/core';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css']
})
export class EventRowComponent implements OnInit {

  @Input() event?: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
