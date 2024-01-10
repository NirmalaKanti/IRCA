import { TestBed } from '@angular/core/testing';

import { NinthService } from './ninth.service';

describe('NinthService', () => {
  let service: NinthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NinthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
