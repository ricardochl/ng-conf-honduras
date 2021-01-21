import { Component, Input, OnInit } from '@angular/core';
import { ISponsor } from 'src/app/core/models/sponsor.interface';

@Component({
  selector: 'app-silver-sponsors',
  templateUrl: './silver-sponsors.component.html',
  styleUrls: ['./silver-sponsors.component.scss']
})
export class SilverSponsorsComponent implements OnInit {
  @Input() sponsors: ISponsor[];
  constructor() { }

  ngOnInit(): void {
  }

}
