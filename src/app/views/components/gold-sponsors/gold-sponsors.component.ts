import { Component, Input, OnInit } from '@angular/core';
import { ISponsor } from 'src/app/core/models/sponsor.interface';

@Component({
  selector: 'app-gold-sponsors',
  templateUrl: './gold-sponsors.component.html',
  styleUrls: ['./gold-sponsors.component.scss']
})
export class GoldSponsorsComponent implements OnInit {

  @Input() sponsors: ISponsor[];
  constructor() { }

  ngOnInit(): void {
  }

}
