import { TestBed } from '@angular/core/testing';

import { CuadernilloConfigService } from './cuadernillo-config.service';

describe('CuadernilloConfigService', () => {
  let service: CuadernilloConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuadernilloConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
