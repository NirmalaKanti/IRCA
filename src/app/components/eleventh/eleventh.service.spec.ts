import { TestBed } from '@angular/core/testing';

import { EleventhService } from './eleventh.service';

describe('EleventhService', () => {
  let service: EleventhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleventhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
