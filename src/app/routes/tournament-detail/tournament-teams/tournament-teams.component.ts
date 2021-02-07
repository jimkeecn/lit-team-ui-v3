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

}
