import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TournamentLinks } from '@app-models/static';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';


@Component({
  selector: 'tournament-links',
  templateUrl: './tournament-links.component.html',
  styleUrls: ['./tournament-links.component.scss']
})
export class TournamentLinksComponent implements OnInit {
  
 
  constructor(public router: Router, public state: TournamentDetailStateService) { 
  
  }

  ngOnInit(): void {
   
  }

  goToLink(link: TournamentLinks) {
    if (link == TournamentLinks.overview) {
      this.router.navigate(['tournament-detail',this.state.detail$.value.tournamentId,'overview'])
    } else if (link == TournamentLinks.rules) {
      this.router.navigate(['tournament-detail',this.state.detail$.value.tournamentId,'rules'])
    } else if (link == TournamentLinks.brackets) {
      this.router.navigate(['tournament-detail',this.state.detail$.value.tournamentId,'brackets'])
    } else if (link == TournamentLinks.teams) {
      this.router.navigate(['tournament-detail',this.state.detail$.value.tournamentId,'teams'])
      
    }
  }

}
