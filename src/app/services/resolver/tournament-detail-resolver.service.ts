import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TournamentDTO } from '@app-models/tournament';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailResolverService implements Resolve<TournamentDTO> {

  constructor(public tourney: TourneyApiService) { }
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.tourney.getTournamentById(parseInt(route.paramMap.get('id')));
  }
}
