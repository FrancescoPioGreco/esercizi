import { TestBed } from '@angular/core/testing';

import { FetchMavenApiService } from './fetch-maven-api.service';

describe('FetchMavenApiService', () => {
  let service: FetchMavenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMavenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
