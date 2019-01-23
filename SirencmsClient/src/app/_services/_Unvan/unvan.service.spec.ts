import { TestBed } from '@angular/core/testing';

import { UnvanService } from './unvan.service';

describe('UnvanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnvanService = TestBed.get(UnvanService);
    expect(service).toBeTruthy();
  });
});
