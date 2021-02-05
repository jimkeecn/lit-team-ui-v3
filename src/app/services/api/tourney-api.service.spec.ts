import { TestBed } from '@angular/core/testing';

import { TourneyApiService } from './tourney-api.service';

describe('TourneyApiService', () => {
  let service: TourneyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourneyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
