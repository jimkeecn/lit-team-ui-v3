import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from 'rxjs';
import { GameMode, StaticList, TournamentFilter, TournamentFormat, TournamentMap, TournamentTimeEnum, TournamentType } from '@app-models/static';
import { tap } from 'rxjs/operators';
import { BracketGroupDTO, TournamentDTO, TournamentTeamDTO } from '@app-models/tournament';
import { MatchCodeResponse, MatchViewModel } from '@app-models/user';

@Injectable({
  providedIn: 'root'
})
export class TourneyApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
    private route: Router,
    private app:ApplicationService
  ) {
    this.baseUrl = environment.url;
  }

  getupcomingFeatureTournament():Observable<TournamentDTO[]> {
    let param: TournamentFilter = {
      isFeatured: true,
      timeEmun: TournamentTimeEnum.Future,
    }
    const url = `${this.baseUrl}/Tournament`;
    return this.http.post<TournamentDTO[]>(url,param).pipe(tap());
  }

  getTournaments(filter:TournamentFilter):Observable<TournamentDTO[]> {
    const url = `${this.baseUrl}/Tournament`;
    return this.http.post<TournamentDTO[]>(url,filter).pipe(tap());
  }

  getTournamentById(id:number):Observable<TournamentDTO> {
    const url = `${this.baseUrl}/Tournament/${id}`;
    return this.http.get<TournamentDTO>(url).pipe(tap());
  }

  getTeamsTournaments(id:number):Observable<TournamentTeamDTO[]> {
    const url = `${this.baseUrl}/Tournament/${id}/teams`;
    return this.http.get<TournamentTeamDTO[]>(url).pipe(tap());
  }

  registerTournamentById(id:number):Observable<number> {
    const url = `${this.baseUrl}/Tournament/${id}/register`;
    return this.http.post<number>(url,null).pipe(tap());
  }

  getTournamentBrackets(id:number):Observable<BracketGroupDTO[]> {
    const url = `${this.baseUrl}/Tournament/${id}/brackets`;
    return this.http.get<BracketGroupDTO[]>(url).pipe(tap());
  }

  getBracketById(id: number): Observable<BracketGroupDTO>{
    const url = `${this.baseUrl}/Bracket/${id}`;
    return this.http.get<BracketGroupDTO>(url).pipe(tap());
  }

  getBracketMatchesById(id: number): Observable<MatchViewModel[]>{
    const url = `${this.baseUrl}/Bracket/${id}/matches`;
    return this.http.get<MatchViewModel[]>(url).pipe(tap());
  }

  getBracketTournamentCodes(id: number): Observable<MatchCodeResponse[]>{
    const url = `${this.baseUrl}/Bracket/${id}/matchesCode`;
    return this.http.get<MatchCodeResponse[]>(url).pipe(tap());
  }
  
}
