import { TestBed } from '@angular/core/testing';

import { TwelthService } from './twelth.service';

describe('TwelthService', () => {
  let service: TwelthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwelthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
