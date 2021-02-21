import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { MatchClipRequest, MatchViewModel, MemberRequestCreateModel, MemberRequestViewModel, MyFullDetail, PlayerUpdateModel, TeamViewModel } from '@app-models/user';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
import { GamesStatic } from '@app-models/static';

@Injectable({
  providedIn: 'root'
})
export class StaticApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
    private route: Router,
    private app:ApplicationService
  ) {
    this.baseUrl = environment.url;
  }

  getGameModes() : Observable<any[]>{
    const url = `${this.baseUrl}/static/GameModes`;
    return this.http.get<any[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getTournamentTypes() : Observable<any[]>{
    const url = `${this.baseUrl}/static/TournamentTypes`;
    return this.http.get<any[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getTournamentMaps() : Observable<any[]>{
    const url = `${this.baseUrl}/static/TournamentMaps`;
    return this.http.get<any[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getTournamentFormats() : Observable<any[]>{
    const url = `${this.baseUrl}/static/TournamentFormats`;
    return this.http.get<any[]>(url).pipe(tap(x=>{
      //do something
    }));
  }

  getGames() : Observable<GamesStatic[]>{
    const url = `${this.baseUrl}/static/Games`;
    return this.http.get<any[]>(url).pipe(tap(x=>{
      //do something
    }));
  }
  
}
