import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentDTO } from '@app-models/tournament';

@Component({
  selector: 'tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent implements OnInit {

  _tournament: TournamentDTO = new TournamentDTO();
  @Input("getTour")
  set settTour(tournament: TournamentDTO) {
    debugger;
    this._tournament = tournament;
  }
  
  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  navigateToTournamentDetail(id){
    this.route.navigate(['tournament-detail',id,'overview'])
  }

}
