import { TestBed } from '@angular/core/testing';

import { CuadernillosService } from './cuadernillos.service';

describe('CuadernillosService', () => {
  let service: CuadernillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadernillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
