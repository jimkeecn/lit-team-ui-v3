import { Component, OnInit } from '@angular/core';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent implements OnInit {

  constructor(public state:TournamentDetailStateService) { }

  ngOnInit(): void {
  }

}
