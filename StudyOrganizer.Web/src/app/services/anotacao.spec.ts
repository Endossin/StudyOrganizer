import { TestBed } from '@angular/core/testing';

import { Anotacao } from './anotacao';

describe('Anotacao', () => {
  let service: Anotacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Anotacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
