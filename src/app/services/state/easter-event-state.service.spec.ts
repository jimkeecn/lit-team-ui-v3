import { TestBed } from '@angular/core/testing';

import { EasterEventStateService } from './easter-event-state.service';

describe('EasterEventStateService', () => {
  let service: EasterEventStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasterEventStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
