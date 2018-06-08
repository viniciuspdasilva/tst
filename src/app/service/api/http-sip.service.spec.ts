import { TestBed, inject } from '@angular/core/testing';

import { HttpSipService } from './http-sip.service';

describe('HttpSipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpSipService]
    });
  });

  it('should be created', inject([HttpSipService], (service: HttpSipService) => {
    expect(service).toBeTruthy();
  }));
});
