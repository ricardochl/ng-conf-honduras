import { ITicket } from './../../../core/models/ticket.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() tickets: ITicket[];
  constructor() { }

  ngOnInit(): void {
  }

}
