import { TestBed } from '@angular/core/testing';

import { LolMatchDetailService } from './lol-match-detail.service';

describe('LolMatchDetailService', () => {
  let service: LolMatchDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LolMatchDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
