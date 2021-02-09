import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchDetailResolverService {

  constructor(public tourney: TourneyApiService) { }
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.tourney.getBracketById(parseInt(route.paramMap.get('bracketId')));
  }

}
