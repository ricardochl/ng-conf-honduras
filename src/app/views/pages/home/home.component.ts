import { ISponsor } from './../../../core/models/sponsor.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SponsorsService } from 'src/app/core/services/sponsors.service';
import * as _ from 'lodash';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sponsors$: Observable<_.Dictionary<ISponsor[]>>;

  constructor(private sponsorsService: SponsorsService) {
    this.sponsors$ =  this.sponsorsService.getSponsors().pipe(
      map(data => _.groupBy(data, 'sponsorshipPlan')),
    );

   }


  ngOnInit(): void {
  }

}
