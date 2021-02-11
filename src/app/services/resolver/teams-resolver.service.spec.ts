import { TestBed } from '@angular/core/testing';

import { TeamsResolverService } from './teams-resolver.service';

describe('TeamsResolverService', () => {
  let service: TeamsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
