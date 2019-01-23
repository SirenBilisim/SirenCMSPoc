import { TestBed } from '@angular/core/testing';

import { Unvan2Service } from './unvan2.service';

describe('Unvan2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Unvan2Service = TestBed.get(Unvan2Service);
    expect(service).toBeTruthy();
  });
});
