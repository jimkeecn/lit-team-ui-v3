import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentDTO } from '@app-models/tournament';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { ApplicationService } from '@app-services/app/application.service';
import { AuthService } from '@app-services/auth/auth.service';
import { TournamentDetailStateService } from "@app-services/state/tournament-detail-state.service";
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tournament-container',
  templateUrl: './tournament-container.component.html',
  styleUrls: ['./tournament-container.component.scss']
})
export class TournamentContainerComponent implements OnInit {
  tournamentName: string;
  tournamentTime: Date;
  isRegistered: boolean = false;
  tournamentId: number = 0;
  isRegisteredAsFreeAgent: boolean = false;

  constructor(private route: ActivatedRoute, private state: TournamentDetailStateService,
    public api: TourneyApiService,public auth:AuthService,public app:ApplicationService) { 
    state.detail$.next(this.route.snapshot.data.detail);
    let tourney_detail: TournamentDTO = this.route.snapshot.data.detail;
    this.tournamentName = tourney_detail.name;
    this.tournamentTime = tourney_detail.startDate;
    this.tournamentId = tourney_detail.tournamentId;
    api.getRegistrationsTournaments(tourney_detail.tournamentId).pipe(tap(x => { 
      state.teams$.next([]);
      
    })).subscribe(res => { 
      state.teams$.next(res);
      for (let x = 0; x < res.length; x++){
        res[x].members.forEach(y => { 
          if (y.id == this.auth.currentUserSubject.value.user?.id) {
            this.isRegistered = true;
          }
        })
      }
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })

    api.getTournamentBrackets(tourney_detail.tournamentId).pipe(tap(x => { 
      state.brackets$.next([]);
      
    })).subscribe(res => { 
      console.log(res);
      state.brackets$.next(res);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })

    api.getTournamentGroups(tourney_detail.tournamentId).pipe(tap(x => { 
      state.groups$.next([]);
      
    })).subscribe(res => { 
      console.log(res);
      state.groups$.next(res);
    }, (err: HttpErrorResponse) => {
      this.app.errorHandler(err);
    })

    api.getFreeAgentTournamentById(tourney_detail.tournamentId).subscribe(res => { 
      state.free_agents$.next(res);
      res.forEach(y => { 
        if (y.userId == this.auth.currentUserSubject.value.user?.id) {
          this.isRegisteredAsFreeAgent = true;
        }
      })
      console.log(res);
    })
  }

  registerAsFreeAgent(event) {
    if (event == true) {
      this.api.registerAsFreeAgentTournamentById(this.tournamentId).pipe(tap(x => { 

      })).subscribe(res => { 
          console.log(res);
          
      }, (err: HttpErrorResponse) => {
        this.app.errorHandler(err);
      })
    }
  }

  ngOnInit(): void {
  }

}
