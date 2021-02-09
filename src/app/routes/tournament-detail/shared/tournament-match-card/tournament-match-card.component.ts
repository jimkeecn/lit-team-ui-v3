import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bracketDTO } from '@app-models/tournament';
import { MatchViewModel } from '@app-models/user';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'app-tournament-match-card',
  templateUrl: './tournament-match-card.component.html',
  styleUrls: ['./tournament-match-card.component.scss']
})
export class TournamentMatchCardComponent implements OnInit {

  @Input() match: bracketDTO;
  constructor(public router: Router, public state: TournamentDetailStateService) { }

  ngOnInit(): void {
  }

  navigateToBracketDetail() {
    this.state.bracketOverview$.next(this.match);
    this.router.navigate(['tournament-detail',this.state.detail$.value.tournamentId,'bracket-detail',this.match.matchId])
  }

}
