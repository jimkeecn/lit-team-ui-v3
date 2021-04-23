import { Component, Input, OnInit } from '@angular/core';
import { MatchCheckInIndividual } from '@app-models/tournament';

@Component({
  selector: 'team-ready',
  templateUrl: './team-ready.component.html',
  styleUrls: ['./team-ready.component.scss']
})
export class TeamReadyComponent implements OnInit {

  @Input() player: MatchCheckInIndividual;
  constructor() { }

  ngOnInit(): void {
  }

}
