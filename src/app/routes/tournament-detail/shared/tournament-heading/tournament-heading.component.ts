import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { AuthService } from '@app-services/auth/auth.service';
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
  @Output() registerAsFreeAgent = new EventEmitter();
  @Input() isRegisteredAsFreeAgent: boolean = false;
  @Input() isActive;
  datetimenow = Date.now();
  constructor() { }

  ngOnInit(): void {
    
  }

  register() {
    document.querySelector(".tournament-container").classList.add("registration-overlay-active");
  }

  registerAsFreeAgentFn() {
    if (window.confirm("Are you sure to registered as free agent?")) {
      this.registerAsFreeAgent.emit(true)
    }
    
  }

}
