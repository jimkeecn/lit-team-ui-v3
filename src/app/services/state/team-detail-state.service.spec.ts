import { TestBed } from '@angular/core/testing';

import { TeamDetailStateService } from './team-detail-state.service';

describe('TeamDetailStateService', () => {
  let service: TeamDetailStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamDetailStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
