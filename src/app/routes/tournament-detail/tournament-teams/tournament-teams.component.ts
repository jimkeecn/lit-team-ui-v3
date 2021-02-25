import { Component, OnInit } from '@angular/core';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'app-tournament-teams',
  templateUrl: './tournament-teams.component.html',
  styleUrls: ['./tournament-teams.component.scss']
})
export class TournamentTeamsComponent implements OnInit {

  constructor(public state : TournamentDetailStateService) { }

  ngOnInit(): void {
  }


  openTeamdetail(team) {
    this.state.display_team_detail$.next(team);
    document.querySelector(".tournament-container").classList.add("team-detail-overlay-active");
  }
}
