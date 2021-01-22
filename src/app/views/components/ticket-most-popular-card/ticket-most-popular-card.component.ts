import { ITicket } from './../../../core/models/ticket.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-most-popular-card',
  templateUrl: './ticket-most-popular-card.component.html',
  styleUrls: ['./ticket-most-popular-card.component.scss']
})
export class TicketMostPopularCardComponent implements OnInit {

  @Input() ticket: ITicket;
  constructor() { }

  ngOnInit(): void {
  }

}
