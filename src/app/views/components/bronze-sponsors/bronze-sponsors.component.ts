import { Component, Input, OnInit } from '@angular/core';
import { ISponsor } from 'src/app/core/models/sponsor.interface';

@Component({
  selector: 'app-bronze-sponsors',
  templateUrl: './bronze-sponsors.component.html',
  styleUrls: ['./bronze-sponsors.component.scss']
})
export class BronzeSponsorsComponent implements OnInit {

  @Input() sponsors: ISponsor[];
  constructor() { }

  ngOnInit(): void {
  }

}
