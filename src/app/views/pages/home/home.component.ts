import { TicketsService } from './../../../core/services/tickets.service';
import { ISponsor } from './../../../core/models/sponsor.interface';
import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SponsorsService } from 'src/app/core/services/sponsors.service';
import { groupBy } from 'lodash-es';

import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sponsors$: Observable<_.Dictionary<ISponsor[]>>;
  public data$: Observable<any>;

  constructor(
    private sponsorsService: SponsorsService,
    private ticketsService: TicketsService
  ) {
    this.sponsors$ = this.sponsorsService
      .getSponsors()
      .pipe(map((data) => groupBy(data, 'sponsorshipPlan')));
  }

  ngOnInit(): void {
    this.data$ = combineLatest([
      this.sponsors$,
      this.ticketsService.getTickets()
    ]);
  }
}
