import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { MatchClipRequest, MatchViewModel, MemberRequestCreateModel, MemberRequestViewModel, MyFullDetail, PlayerGameAccount, PlayerUpdateModel, TeamViewModel } from '@app-models/user';
import { ApplicationService } from '@app-services/app/application.service';
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AccountSettingApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
    private route: Router,
    private app:ApplicationService
  ) {
    this.baseUrl = environment.url;
  }

  addUpdateGameAccount(data:PlayerGameAccount) : Observable<PlayerGameAccount>{
    const url = `${this.baseUrl}/user/AddGameAccount`;
    return this.http.post<PlayerGameAccount>(url,data).pipe(tap(x=>{
      //do something
    }));
  }

  delinkCurrentGameAccount() : Observable<any>{
    const url = `${this.baseUrl}/user/Delink`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
      //do something
    }));
  }

  refreshSummonerName() : Observable<any>{
    const url = `${this.baseUrl}/user/RefreshSummonerName`;
    return this.http.post<any>(url,null).pipe(tap(x=>{
      //do something
    }));
  }

  getGameAccounts() : Observable<any>{
    const url = `${this.baseUrl}/user/GameAccounts`;
    return this.http.get<PlayerGameAccount[]>(url).pipe(
      map(x => { 
        let current = x.findIndex(g => g.IsDelinked !== true);
        let old = [...x];
        old.splice(current, 1);
        const obj = {
          current: x[current],
          used : old
        }
        return obj;
      })
    );
  }

}
