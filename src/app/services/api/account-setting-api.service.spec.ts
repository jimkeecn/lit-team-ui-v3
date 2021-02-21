import { TestBed } from '@angular/core/testing';

import { AccountSettingApiService } from './account-setting-api.service';

describe('AccountSettingApiService', () => {
  let service: AccountSettingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountSettingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
