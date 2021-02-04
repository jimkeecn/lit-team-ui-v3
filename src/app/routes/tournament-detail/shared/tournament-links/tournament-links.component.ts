import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export enum TournamentLinks{
  overview = 1,
  rules = 2,
  teams = 3,
  brackets = 4
}

@Component({
  selector: 'tournament-links',
  templateUrl: './tournament-links.component.html',
  styleUrls: ['./tournament-links.component.scss']
})
export class TournamentLinksComponent implements OnInit {
  
  links: TournamentLinks = 1;
  constructor(router: Router) { 
    if (router.url.includes("overview")) {
      this.links = 1;
    } else if (router.url.includes("rules")) {
      this.links = 2;
    } else if (router.url.includes("teams")) {
      this.links = 3;
    } else if (router.url.includes("brackets")) {
      this.links = 4;
    }
  }

  ngOnInit(): void {
  }

}
