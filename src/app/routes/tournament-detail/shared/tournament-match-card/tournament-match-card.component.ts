import { Component, Input, OnInit } from '@angular/core';
import { bracketDTO } from '@app-models/tournament';
import { MatchViewModel } from '@app-models/user';

@Component({
  selector: 'app-tournament-match-card',
  templateUrl: './tournament-match-card.component.html',
  styleUrls: ['./tournament-match-card.component.scss']
})
export class TournamentMatchCardComponent implements OnInit {

  @Input() match: bracketDTO;
  constructor() { }

  ngOnInit(): void {
  }

}
