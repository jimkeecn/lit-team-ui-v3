import { Component, Input, OnInit } from '@angular/core';
import { TournamentTeamDTO } from '@app-models/tournament';

@Component({
  selector: 'tournament-single-team',
  templateUrl: './tournament-single-team.component.html',
  styleUrls: ['./tournament-single-team.component.scss']
})
export class TournamentSingleTeamComponent implements OnInit {

  @Input() team: TournamentTeamDTO;
  constructor() { }

  ngOnInit(): void {
  }

}
