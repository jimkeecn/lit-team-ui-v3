import { Injectable } from '@angular/core';
import { TournamentLinks } from '@app-models/static';
import { TournamentDTO, TournamentTeamDTO } from '@app-models/tournament';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailStateService {
  links: TournamentLinks = 1;
  detail$ = new BehaviorSubject<TournamentDTO>(new TournamentDTO());
  teams$ = new BehaviorSubject<TournamentTeamDTO[]>([]);
  constructor() { }
}