import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from 'rxjs';
import { GameMode, StaticList, TournamentFilter, TournamentFormat, TournamentMap, TournamentTimeEnum, TournamentType } from '@app-models/static';
import { tap } from 'rxjs/operators';
import { BracketGroupDTO, MatchCheckInTeam, TournamentChampionship, TournamentDTO, TournamentInvitationNotification, TournamentRegistrationDTO, TournamentRegistrationFreeAgent, TournamentTeamDTO } from '@app-models/tournament';
import { MatchCodeResponse, MatchViewModel } from '@app-models/user';

@Injectable({
  providedIn: 'root'
})
export class TourneyApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient
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

  getTournamentChampionshipById(id:number):Observable<TournamentChampionship> {
    const url = `${this.baseUrl}/Tournament/${id}/championships`;
    return this.http.get<TournamentChampionship>(url).pipe(tap());
  }

  //Decrecapted
  getTeamsTournaments(id:number):Observable<TournamentTeamDTO[]> {
    const url = `${this.baseUrl}/Tournament/${id}/teams`;
    return this.http.get<TournamentTeamDTO[]>(url).pipe(tap());
  }

  getRegistrationsTournaments(id:number):Observable<TournamentRegistrationDTO[]> {
    const url = `${this.baseUrl}/Tournament/${id}/teams`;
    return this.http.get<TournamentRegistrationDTO[]>(url).pipe(tap());
  }

  registerTournamentById(id:number,data:any):Observable<TournamentRegistrationDTO> {
    const url = `${this.baseUrl}/Tournament/${id}/register`;
    return this.http.post<TournamentRegistrationDTO>(url,data).pipe(tap());
  }

  getMyRecentHistoryTeam(id:number):Observable<TournamentRegistrationDTO[]> {
    const url = `${this.baseUrl}/User/RecentTourneyTeam/${id}`;
    return this.http.get<TournamentRegistrationDTO[]>(url).pipe(tap());
  }

  quiteTournamentById(id:number):Observable<number> {
    const url = `${this.baseUrl}/Tournament/${id}/quit`;
    return this.http.get<number>(url).pipe(tap());
  }


  getInviteCodeForTournament(id:number):Observable<string> {
    const url = `${this.baseUrl}/Tournament/${id}/inviteCode`;
    return this.http.get(url,{ responseType: 'text' }).pipe(tap());
  }

  getInviteByCodeToTournament(id:number,token:number):Observable<string> {
    const url = `${this.baseUrl}/Tournament/${id}/getInviteByCode/${token}`;
    return this.http.get(url,{ responseType: 'text' }).pipe(tap());
  }

  registerAsFreeAgentTournamentById(id:number):Observable<number> {
    const url = `${this.baseUrl}/Tournament/${id}/freeAgent`;
    return this.http.post<number>(url,null).pipe(tap());
  }

  getFreeAgentTournamentById(id:number):Observable<TournamentRegistrationFreeAgent[]> {
    const url = `${this.baseUrl}/Tournament/${id}/freeAgents`;
    return this.http.get<TournamentRegistrationFreeAgent[]>(url).pipe(tap());
  }

  inviteToTournamentById(id:number,data:any):Observable<number> {
    const url = `${this.baseUrl}/Tournament/${id}/invite`;
    return this.http.post<number>(url,data).pipe(tap());
  }

  kickFromTournamentById(id:number,userId:number):Observable<number> {
    const url = `${this.baseUrl}/Tournament/${id}/kick/${userId}`;
    return this.http.post<number>(url,null).pipe(tap());
  }

  disbandTournamentById(id:number):Observable<number> {
    const url = `${this.baseUrl}/Tournament/${id}/disband`;
    return this.http.post<number>(url,null).pipe(tap());
  }

  /*** Deprecated
   *   This API should be removed once Notification is fully implemented
   */
  // getTournamentInvitation():Observable<TournamentInvitationNotification[]> {
  //   const url = `${this.baseUrl}/TournamentRegistration`;
  //   return this.http.get<TournamentInvitationNotification[]>(url).pipe(tap());
  // }

  acceptTournamentInvitation(id:number,nocId:number):Observable<number> {
    const url = `${this.baseUrl}/TournamentRegistration/${id}/Accept/${nocId}`;
    return this.http.post<number>(url,null).pipe(tap());
  }

  rejectTournamentInvitation(id:number,nocId:number):Observable<number> {
    const url = `${this.baseUrl}/TournamentRegistration/${id}/Reject/${nocId}`;
    return this.http.post<number>(url,null).pipe(tap());
  }

  getTournamentBrackets(id:number):Observable<BracketGroupDTO[]> {
    const url = `${this.baseUrl}/Tournament/${id}/brackets`;
    return this.http.get<BracketGroupDTO[]>(url).pipe(tap());
  }

  getTournamentGroups(id:number):Observable<BracketGroupDTO[]> {
    const url = `${this.baseUrl}/Tournament/${id}/groups`;
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

  getBracketCodeById(id: number,matchIndex:number): Observable<MatchCodeResponse>{
    const url = `${this.baseUrl}/Bracket/${id}/matchCode/${matchIndex}`;
    return this.http.get<MatchCodeResponse>(url).pipe(tap());
  }

  getBracketCheckIns(id: number): Observable<MatchCheckInTeam[]>{
    const url = `${this.baseUrl}/Bracket/${id}/checkin`;
    return this.http.get<MatchCheckInTeam[]>(url).pipe(tap());
  }

  checkInBracket(id: number): Observable<MatchCodeResponse>{
    const url = `${this.baseUrl}/Bracket/${id}/checkin`;
    return this.http.post<MatchCodeResponse>(url,null).pipe(tap());
  }

  removeCheckInBracket(id: number): Observable<MatchCodeResponse>{
    const url = `${this.baseUrl}/Bracket/${id}/checkin`;
    return this.http.delete<MatchCodeResponse>(url).pipe(tap());
  }
  
}
