import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentDetailStateService } from "@app-services/state/tournament-detail-state.service";

@Component({
  selector: 'app-tournament-container',
  templateUrl: './tournament-container.component.html',
  styleUrls: ['./tournament-container.component.scss']
})
export class TournamentContainerComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private state: TournamentDetailStateService) { 
    state.detail$.next(this.route.snapshot.data.detail);
  }

  ngOnInit(): void {
  }

}
