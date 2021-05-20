import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { ClanMemberLeagueOfLegendAccountDTO } from "@app-models/clan";
import { getPositonText } from "@app-services/sharedFunctions";
@Injectable({
  providedIn: 'root'
})
export class ClanApiService {

  baseUrl: string = '';
  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = environment.url;
  }

  AmIClanOwner() : Observable<boolean>{
    const url = `${this.baseUrl}/Clan/AmIClanOwner`;
    return this.http.get<boolean>(url).pipe(tap(x=>{
      //do something
    }));
  }

  GetClanLolAccounts(id) : Observable<ClanMemberLeagueOfLegendAccountDTO[]>{
    const url = `${this.baseUrl}/Clan/${id}/ClanLolAccounts`;
    return this.http.get<ClanMemberLeagueOfLegendAccountDTO[]>(url).pipe(map(x => {
      x.forEach(y =>
        y.positionText = getPositonText(y.position));
      return x
    }));
  }
}
