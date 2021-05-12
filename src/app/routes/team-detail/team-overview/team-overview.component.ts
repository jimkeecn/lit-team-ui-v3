import { Component, OnInit } from '@angular/core';
import { ClanTournamentHistoryDTO } from '@app-models/user';
import { ApiService } from '@app-services/api/api.service';
import { TeamDetailStateService } from '@app-services/state/team-detail-state.service';
import { stat } from 'fs';

@Component({
  selector: 'team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  constructor(public state:TeamDetailStateService, public api:ApiService) { }
  history: ClanTournamentHistoryDTO[] = [];
  clanDescription: string = "";
  ngOnInit(): void {
    this.state.overview$.subscribe(res => {
      this.clanDescription = res.clanDescription;
    })
    this.api.GetTeamHistoryById(this.state.overview$.value.id).subscribe(res => {
      this.history = res;
    })
  }

}
