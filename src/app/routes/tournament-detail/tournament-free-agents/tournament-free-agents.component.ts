import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { LeagueOfLegendsPosition } from '@app-models/static';
import { MemberRequestCreateModel } from '@app-models/user';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'app-tournament-free-agents',
  templateUrl: './tournament-free-agents.component.html',
  styleUrls: ['./tournament-free-agents.component.scss']
})
export class TournamentFreeAgentsComponent implements OnInit {

  constructor(public state:TournamentDetailStateService,public api:TourneyApiService,public app:ApplicationService) { }

  ngOnInit(): void {
  }

  invite(name) {
    let obj: MemberRequestCreateModel = {
      gameId: name,
      clanId: 0
    }
    this.api.inviteToTournamentById(this.state.detail$.value.tournamentId,obj).subscribe(res => { 
      this.app.openSnackBar("You have sent an invitation", "success");
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })
  }

  getOpGG(gameId: string) {
    return `https://oce.op.gg/summoner/userName=${gameId}`;
  }
  
  getPositonText(number) {
    switch (number) {
      case LeagueOfLegendsPosition.Fill:
        return "Fill";
      case LeagueOfLegendsPosition.Top:
        return "Top Laner";
      case LeagueOfLegendsPosition.Jungler:
        return "Jungler";
      case LeagueOfLegendsPosition.Mid:
        return "Mid Laner";
      case LeagueOfLegendsPosition.ADC:
        return "ADC";
      case LeagueOfLegendsPosition.Support:
        return "Support";
      default:
        return "Full";
    }
  }
}
