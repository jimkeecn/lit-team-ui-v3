import { TestBed } from '@angular/core/testing';

import { ScrimApiService } from './scrim-api.service';

describe('ScrimApiService', () => {
  let service: ScrimApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrimApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
