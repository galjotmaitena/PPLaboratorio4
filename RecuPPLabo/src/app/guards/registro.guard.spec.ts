import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { registroGuard } from './registro.guard';

describe('registroGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => registroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
