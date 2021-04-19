import { Component, Input, OnInit } from '@angular/core';
import { Team } from '@app-models/leagueoflegenes';
import { MatchViewModel } from '@app-models/user';
import { LolMatchDetailService } from '@app-services/state/leagueoflegends/lol-match-detail.service';

@Component({
  selector: 'app-game-state',
  templateUrl: './game-state.component.html',
  styleUrls: ['./game-state.component.scss']
})
export class GameStateComponent implements OnInit {
  match: MatchViewModel;
  teams: Team[];
  matchDuration: string;
  @Input('setMatch')
  set matchSetter(value: MatchViewModel) {
    if (value) {
      this.match = value;
      let data = JSON.parse(value.matchResultJson);
      this.matchDuration = this.lol.constructGameDurationToMinSeconds(data);
      this.teams = this.lol.constructTeam(data);
      console.log(this.teams);
    }
  }

  constructor(public lol : LolMatchDetailService) { }

  ngOnInit(): void {
  }

}
