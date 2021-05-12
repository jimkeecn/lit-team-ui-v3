import { Component, Input, OnInit } from '@angular/core';
import { ClanTournamentHistoryDTO } from '@app-models/user';

@Component({
  selector: 'team-tournament-history',
  templateUrl: './team-tournament-history.component.html',
  styleUrls: ['./team-tournament-history.component.scss']
})
export class TeamTournamentHistoryComponent implements OnInit {

  @Input() history : ClanTournamentHistoryDTO[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
