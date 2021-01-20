import { Component, OnInit } from '@angular/core';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss']
})
export class SpeakerCardComponent implements OnInit {
  public faTwitter = faTwitter;
  public faGithub = faGithub;
  constructor() { }

  ngOnInit(): void {
  }

}
