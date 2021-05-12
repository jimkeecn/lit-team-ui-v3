import { Injectable } from '@angular/core';
import { ClanViewModel } from '@app-models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDetailStateService {

  overview$ = new BehaviorSubject<ClanViewModel>(new ClanViewModel());
  overviewTabs$ = new BehaviorSubject<number>(1);
  overviewTabs = [
    { text: "Overview", value: 1 },
    { text: "History", value: 2 },
    { text: "Games", value: 3}
  ]
  constructor() { }

  setOverviewTabs(val) {
    this.overviewTabs$.next(val);
  }
}
