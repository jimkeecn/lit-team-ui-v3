import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';
import { TournamentDetailStateService } from "@app-services/state/tournament-detail-state.service";
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-tournament-overview',
  templateUrl: './tournament-overview.component.html',
  styleUrls: ['./tournament-overview.component.scss']
})
export class TournamentOverviewComponent implements OnInit {

  constructor(public state: TournamentDetailStateService) {

  }

  ngOnInit(): void {
  }
  
}
