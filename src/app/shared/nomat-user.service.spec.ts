import { TestBed, inject } from '@angular/core/testing';

import { NomatUserService } from './nomat-user.service';

describe('NomatUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NomatUserService]
    });
  });

  it('should be created', inject([NomatUserService], (service: NomatUserService) => {
    expect(service).toBeTruthy();
  }));
});
