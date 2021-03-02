import { Injectable } from '@angular/core';
import { TournamentLinks } from '@app-models/static';
import { bracketDTO, BracketGroupDTO, TournamentDTO, TournamentRegistrationDTO, TournamentTeamDTO } from '@app-models/tournament';
import { ClanMemberViewModel, MatchViewModel } from '@app-models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailStateService {
  links: TournamentLinks = 1;
  detail$ = new BehaviorSubject<TournamentDTO>(new TournamentDTO());
  teams$ = new BehaviorSubject<TournamentRegistrationDTO[]>([]);
  brackets$ = new BehaviorSubject<BracketGroupDTO[]>([]);
  groups$ = new BehaviorSubject<BracketGroupDTO[]>([]);
  bracketOverview$ = new BehaviorSubject<bracketDTO>(null);
  matches$ = new BehaviorSubject<MatchViewModel[]>([]);
  display_team_detail$ = new BehaviorSubject<TournamentRegistrationDTO>(null)
  constructor() { }
}
