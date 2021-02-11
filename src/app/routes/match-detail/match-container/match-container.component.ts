import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchCodeResponse, MatchViewModel } from '@app-models/user';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'app-match-container',
  templateUrl: './match-container.component.html',
  styleUrls: ['./match-container.component.scss']
})
export class MatchContainerComponent implements OnInit,AfterViewInit {

  _matches: MatchViewModel[] = [];
  _tournamentCodes: MatchCodeResponse[] = [];
  constructor(private route: ActivatedRoute, private state: TournamentDetailStateService, public api:TourneyApiService, public app:ApplicationService) {
    this.state.bracketOverview$.next(this.route.snapshot.data.detail);
  }
  ngOnInit(): void {
    this.getBracketMatchesById();
    this.getBracketMatchCodes();
  }

  ngAfterViewInit() {
  }

  getBracketMatchesById() {
    this.api.getBracketMatchesById(this.state.bracketOverview$.value.matchId).subscribe(res => { 
      this._matches = res;
      console.log(res);
    })
  }

  getBracketMatchCodes() {
    this.api.getBracketTournamentCodes(this.state.bracketOverview$.value.matchId).subscribe(res => { 
      console.log(res);
      this._tournamentCodes = res;
    })
  }
  

}
