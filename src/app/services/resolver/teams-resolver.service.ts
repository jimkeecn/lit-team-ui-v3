import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '@app-services/api/api.service';
import { TourneyApiService } from '@app-services/api/tourney-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsResolverService {

  constructor(public api: ApiService) { }
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.api.getAllTeam();
  }
}
