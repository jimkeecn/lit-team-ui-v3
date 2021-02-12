import { TestBed } from '@angular/core/testing';

import { TeamDetailResolverService } from './team-detail-resolver.service';

describe('TeamDetailResolverService', () => {
  let service: TeamDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
