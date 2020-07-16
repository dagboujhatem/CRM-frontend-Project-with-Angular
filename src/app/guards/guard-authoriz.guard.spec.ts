import { TestBed } from '@angular/core/testing';

import { GuardAuthorizGuard } from './guard-authoriz.guard';

describe('GuardAuthorizGuard', () => {
  let guard: GuardAuthorizGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardAuthorizGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
