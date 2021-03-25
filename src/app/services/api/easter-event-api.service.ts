import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { BehaviorSubject, from, Observable } from 'rxjs';
import { GameMode, StaticList, TournamentFilter, TournamentFormat, TournamentMap, TournamentTimeEnum, TournamentType } from '@app-models/static';
import { tap } from 'rxjs/operators';
import { BracketGroupDTO, TournamentChampionship, TournamentDTO, TournamentInvitationNotification, TournamentRegistrationDTO, TournamentRegistrationFreeAgent, TournamentTeamDTO } from '@app-models/tournament';
import { MatchCodeResponse, MatchViewModel } from '@app-models/user';
import { EventDTO ,EventStageDTO, UserEventDTO} from '@app-models/easterEvent';
@Injectable({
  providedIn: 'root'
})
export class EasterEventApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.url;
  }

  getEasterEvent():Observable<UserEventDTO> {
    const url = `${this.baseUrl}/EasterEvent/2`;
    return this.http.get<UserEventDTO>(url).pipe(tap());
  }

  getEasterEventStages():Observable<EventStageDTO[]> {
    const url = `${this.baseUrl}/EasterEvent/Stages/2`;
    return this.http.get<EventStageDTO[]>(url).pipe(tap());
  }
}
