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
  constructor(public state: TournamentDetailStateService,
    public api: TourneyApiService,
    public app: ApplicationService,
    public dc:ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  getBracketCodeById(index) {
    this.api.getBracketCodeById(this.state.bracketOverview$.value.matchId,index + 1).subscribe(res => { 
      console.log(res);
      this.matches.forEach((x, i) => { 
        if (i == index) {
          x.matchCode = res.riotTournamentCode;
        }
      })
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

  copyTournamentCode() {
    this.app.openSnackBar("You have copied the code","success")
  }

}
