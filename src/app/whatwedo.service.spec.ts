import { TestBed } from '@angular/core/testing';

import { WhatwedoService } from './whatwedo.service';

describe('WhatwedoService', () => {
  let service: WhatwedoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatwedoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
