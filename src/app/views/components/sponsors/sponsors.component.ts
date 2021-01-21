import { ISponsor } from './../../../core/models/sponsor.interface';
import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  @Input() sponsors: _.Dictionary<ISponsor[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
