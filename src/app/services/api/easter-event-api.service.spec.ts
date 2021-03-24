import { TestBed } from '@angular/core/testing';

import { EasterEventApiService } from './easter-event-api.service';

describe('EasterEventApiService', () => {
  let service: EasterEventApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasterEventApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
