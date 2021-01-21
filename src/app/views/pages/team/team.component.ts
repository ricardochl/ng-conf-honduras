import { ITeam } from './../../../core/models/team.interface';
import { Observable } from 'rxjs';
import { TeamService } from './../../../core/services/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public team$: Observable<ITeam[]>;
  constructor(private teamService: TeamService) {
    this.team$ = this.teamService.getTeam();
  }



  ngOnInit(): void {

  }

}
