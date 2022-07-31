import { TestBed } from '@angular/core/testing';

import { EcomGlobalService } from './ecom-global.service';

describe('EcomGlobalService', () => {
  let service: EcomGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
