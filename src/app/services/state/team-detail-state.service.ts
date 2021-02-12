import { Injectable } from '@angular/core';
import { TeamViewModel } from '@app-models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailStateService {

  overview$ = new BehaviorSubject<TeamViewModel>(new TeamViewModel());
  constructor() { }
}
