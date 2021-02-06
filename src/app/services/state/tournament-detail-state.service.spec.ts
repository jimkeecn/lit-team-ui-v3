import { TestBed } from '@angular/core/testing';

import { TournamentDetailStateService } from './tournament-detail-state.service';

describe('TournamentDetailStateService', () => {
  let service: TournamentDetailStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentDetailStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
