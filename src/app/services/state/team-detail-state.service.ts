import { Injectable } from '@angular/core';
import { ClanViewModel } from '@app-models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailStateService {

  overview$ = new BehaviorSubject<ClanViewModel>(new ClanViewModel());
  constructor() { }
}
