import { TestBed } from '@angular/core/testing';

import { TournamentDetailResolverService } from './tournament-detail-resolver.service';

describe('TournamentDetailResolverService', () => {
  let service: TournamentDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
