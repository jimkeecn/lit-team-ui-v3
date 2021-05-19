import { TestBed } from '@angular/core/testing';

import { ClanApiService } from './clan-api.service';

describe('ClanApiService', () => {
  let service: ClanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
