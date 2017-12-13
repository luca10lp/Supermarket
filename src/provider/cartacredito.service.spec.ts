import { TestBed, inject } from '@angular/core/testing';

import { CartacreditoService } from './cartacredito.service';

describe('CartacreditoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartacreditoService]
    });
  });

  it('should be created', inject([CartacreditoService], (service: CartacreditoService) => {
    expect(service).toBeTruthy();
  }));
});
