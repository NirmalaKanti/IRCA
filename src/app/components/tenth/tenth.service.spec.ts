import { TestBed } from '@angular/core/testing';

import { TenthService } from './tenth.service';

describe('TenthService', () => {
  let service: TenthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});