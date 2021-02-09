import { SpeakersService } from './../../../core/services/speakers.service';
import { ISpeaker } from './../../../core/models/speaker.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  public speakers$: Observable<ISpeaker[]>;
  constructor(private speakerService: SpeakersService) {
    this.speakers$ = this.speakerService.getSpeakers();
  }

  ngOnInit(): void {
  }

}
