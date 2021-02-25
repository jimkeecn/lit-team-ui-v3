import { Component, OnInit } from '@angular/core';
import { LeagueOfLegendsPosition } from '@app-models/static';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';

@Component({
  selector: 'tournament-team-detail',
  templateUrl: './tournament-team-detail.component.html',
  styleUrls: ['./tournament-team-detail.component.scss']
})
export class TournamentTeamDetailComponent implements OnInit {

  constructor(public state:TournamentDetailStateService) { }

  ngOnInit(): void {
  }


  discard() {
    document.querySelector(".tournament-container").classList.remove("team-detail-overlay-active");
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
