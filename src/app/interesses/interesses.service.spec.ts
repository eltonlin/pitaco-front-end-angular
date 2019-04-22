import { TestBed } from '@angular/core/testing';

import { InteressesService } from './interesses.service';

describe('InteressesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteressesService = TestBed.get(InteressesService);
    expect(service).toBeTruthy();
  });
});
