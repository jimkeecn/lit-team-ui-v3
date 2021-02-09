import { TestBed } from '@angular/core/testing';

import { MatchDetailResolverService } from './match-detail-resolver.service';

describe('MatchDetailResolverService', () => {
  let service: MatchDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
