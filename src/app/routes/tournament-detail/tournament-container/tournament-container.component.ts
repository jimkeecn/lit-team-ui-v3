import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentDTO } from '@app-models/tournament';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { TournamentDetailStateService } from "@app-services/state/tournament-detail-state.service";

@Component({
  selector: 'app-tournament-container',
  templateUrl: './tournament-container.component.html',
  styleUrls: ['./tournament-container.component.scss']
})
export class TournamentContainerComponent implements OnInit {
  tournamentName: string;
  tournamentTime: Date;
  constructor(private route: ActivatedRoute, private state: TournamentDetailStateService, public api:TourneyApiService) { 
    state.detail$.next(this.route.snapshot.data.detail);
    let tourney_detail: TournamentDTO = this.route.snapshot.data.detail;
    this.tournamentName = tourney_detail.name;
    this.tournamentTime = tourney_detail.startDate;
    api.getTeamsTournaments(tourney_detail.tournamentId).subscribe(res => { 
      state.teams$.next(res);
    })
    api.getTournamentBrackets(tourney_detail.tournamentId).subscribe(res => { 
      console.log(res);
      state.brackets$.next(res);
    })
  }

  ngOnInit(): void {
  }

}
