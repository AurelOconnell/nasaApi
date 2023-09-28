import { TestBed } from '@angular/core/testing';

import { NasaAPIService } from './nasa-api.service';

describe('NasaAPIService', () => {
  let service: NasaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
