import { Injectable } from '@angular/core';
import { TournamentDTO } from '@app-models/tournament';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailStateService {

  detail$ = new BehaviorSubject<TournamentDTO>(new TournamentDTO());
  constructor() { }
}
