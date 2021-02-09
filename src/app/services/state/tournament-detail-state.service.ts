import { Injectable } from '@angular/core';
import { TournamentLinks } from '@app-models/static';
import { bracketDTO, BracketGroupDTO, TournamentDTO, TournamentTeamDTO } from '@app-models/tournament';
import { MatchViewModel } from '@app-models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailStateService {
  links: TournamentLinks = 1;
  detail$ = new BehaviorSubject<TournamentDTO>(new TournamentDTO());
  teams$ = new BehaviorSubject<TournamentTeamDTO[]>([]);
  brackets$ = new BehaviorSubject<BracketGroupDTO[]>([]);
  bracketOverview$ = new BehaviorSubject<bracketDTO>(null);
  matches$ = new BehaviorSubject<MatchViewModel[]>([]);
  constructor() { }
}
