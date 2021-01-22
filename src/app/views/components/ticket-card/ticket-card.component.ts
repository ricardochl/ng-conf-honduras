import { ITicket } from './../../../core/models/ticket.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss']
})
export class TicketCardComponent implements OnInit {

  @Input() ticket: ITicket;
  constructor() { }

  ngOnInit(): void {
  }

}
