import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'match-states',
  templateUrl: './match-states.component.html',
  styleUrls: ['./match-states.component.scss']
})
export class MatchStatesComponent implements OnInit {

  @Input() matches = [];
  @Input() tournamentCodes = [];
  constructor(public state: TournamentDetailStateService,
    public api: TourneyApiService,
    public app: ApplicationService,
    public dc:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  copyTournamentCode() {
    this.app.openSnackBar("You have copied the code","success")
  }

}
