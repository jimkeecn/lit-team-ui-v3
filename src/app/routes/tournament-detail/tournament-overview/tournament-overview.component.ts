import { Component, OnInit } from '@angular/core';
import { TournamentDetailStateService } from "@app-services/state/tournament-detail-state.service";
@Component({
  selector: 'app-tournament-overview',
  templateUrl: './tournament-overview.component.html',
  styleUrls: ['./tournament-overview.component.scss']
})
export class TournamentOverviewComponent implements OnInit {

  constructor(public state:TournamentDetailStateService) { }

  ngOnInit(): void {
  }

}
