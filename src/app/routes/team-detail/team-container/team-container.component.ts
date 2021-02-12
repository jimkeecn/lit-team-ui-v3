import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { TeamDetailStateService } from "@app-services/state/team-detail-state.service";
@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private state: TeamDetailStateService, public api:TourneyApiService, public app:ApplicationService) {
    console.log(this.route.snapshot.data.detail);
    this.state.overview$.next(this.route.snapshot.data.detail);
  }

  ngOnInit(): void {
  }

}
