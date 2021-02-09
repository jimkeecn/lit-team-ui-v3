import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchViewModel } from '@app-models/user';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'app-match-container',
  templateUrl: './match-container.component.html',
  styleUrls: ['./match-container.component.scss']
})
export class MatchContainerComponent implements OnInit,AfterViewInit {

  constructor(private route: ActivatedRoute, private state: TournamentDetailStateService, public api:TourneyApiService) {
    this.state.bracketOverview$.next(this.route.snapshot.data.detail);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
