import { TestBed } from '@angular/core/testing';

import { EighthService } from './eighth.service';

describe('EighthService', () => {
  let service: EighthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EighthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
