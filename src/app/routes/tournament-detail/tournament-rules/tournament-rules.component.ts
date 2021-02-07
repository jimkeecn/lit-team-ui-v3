import { Component, OnInit } from '@angular/core';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'app-tournament-rules',
  templateUrl: './tournament-rules.component.html',
  styleUrls: ['./tournament-rules.component.scss']
})
export class TournamentRulesComponent implements OnInit {

  constructor(public state:TournamentDetailStateService) { }

  ngOnInit(): void {
  }

}
