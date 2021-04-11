import { TestBed } from '@angular/core/testing';

import { StaticStateService } from './static-state.service';

describe('StaticStateService', () => {
  let service: StaticStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
