import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';

@Component({
  selector: 'app-tournament-invite',
  templateUrl: './tournament-invite.component.html',
  styleUrls: ['./tournament-invite.component.scss']
})
export class TournamentInviteComponent implements OnInit {
  errorMessage: string = "";
  tournamentId: number;
  constructor( public activeRoute: ActivatedRoute,
    public api: TourneyApiService, public app: ApplicationService,
  public route:Router) {
    let param = this.activeRoute.snapshot.params;
    if (param != null) {
      console.log(param);
      this.tournamentId = param.tournamentId;
      this.api.getInviteByCodeToTournament(param.tournamentId, param.token).subscribe(res => {
        this.route.navigate(['tournament-detail',param.tournamentId,'overview'])

      }, (err: HttpErrorResponse) => {
        this.app.errorHandler(err);
        this.errorMessage = err.error;
    })
    } else {
      this.errorMessage = "Invalid Invite Link";
    } 
    
  }
  ngOnInit(): void {
  }

}
