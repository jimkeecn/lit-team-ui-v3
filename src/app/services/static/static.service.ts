import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '@app-services/app/application.service';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  GameMode, GamesStatic, StaticList, TournamentFormat,
  TournamentMap, TournamentType
} from '@app-models/static';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StaticService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
    private route: Router,
    private app:ApplicationService
  ) {
    this.baseUrl = environment.url;
  }


  $staticList = new BehaviorSubject<StaticList>(new StaticList());
  
  getGameModes() : Observable<GameMode[]>{
    const url = `${this.baseUrl}/static/gamemodes`;
    return this.http.get<GameMode[]>(url).pipe(tap(x => {
      let origin = { ...this.$staticList.value };
      origin.gameModes = x;
      this.$staticList.next(origin);
    }));
  }

  getTournamentTypes() : Observable<TournamentType[]>{
    const url = `${this.baseUrl}/static/TournamentTypes`;
    return this.http.get<TournamentType[]>(url).pipe(tap(x => {
      let origin = { ...this.$staticList.value };
      origin.tournamentTypes = x;
      this.$staticList.next(origin);
    }));
  }

  getTournamentMaps() : Observable<TournamentMap[]>{
    const url = `${this.baseUrl}/static/TournamentMaps`;
    return this.http.get<TournamentMap[]>(url).pipe(tap(x => {
      let origin = { ...this.$staticList.value };
      origin.tournamentMaps = x;
      this.$staticList.next(origin);
    }));
  }

  getTournamentFormats() : Observable<TournamentFormat[]>{
    const url = `${this.baseUrl}/static/TournamentFormats`;
    return this.http.get<TournamentFormat[]>(url).pipe(tap(x => {
      let origin = { ...this.$staticList.value };
      origin.tournamentFormats = x;
      this.$staticList.next(origin);
    }));
  }

  getGames() : Observable<GamesStatic[]>{
    const url = `${this.baseUrl}/static/Games`;
    return this.http.get<any[]>(url).pipe(tap(x=>{
      //do something
    }));
  }


}
