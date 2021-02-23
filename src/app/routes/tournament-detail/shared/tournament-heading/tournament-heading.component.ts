import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TournamentDetailStateService } from '@app-services/state/tournament-detail-state.service';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'tournament-heading',
  templateUrl: './tournament-heading.component.html',
  styleUrls: ['./tournament-heading.component.scss']
})
export class TournamentHeadingComponent implements OnInit {


  @Input() tournamentName: string;
  @Input() tournamentTime: Date;
  @Input() isRegistered: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  register() {
    document.querySelector(".tournament-container").classList.add("registration-overlay-active");
  }

}
