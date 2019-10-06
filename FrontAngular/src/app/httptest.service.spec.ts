import { TestBed } from '@angular/core/testing';

import { HttptestService } from './httptest.service';

describe('HttptestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttptestService = TestBed.get(HttptestService);
    expect(service).toBeTruthy();
  });
});
