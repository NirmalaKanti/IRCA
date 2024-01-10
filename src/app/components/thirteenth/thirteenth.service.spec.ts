import { TestBed } from '@angular/core/testing';

import { ThirteenthService } from './thirteenth.service';

describe('ThirteenthService', () => {
  let service: ThirteenthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirteenthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
