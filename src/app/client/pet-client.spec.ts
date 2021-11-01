import { TestBed } from '@angular/core/testing';

import { PetClient } from './pet-client';

describe('PetClientService', () => {
  let service: PetClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
