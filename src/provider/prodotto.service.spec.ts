import { TestBed, inject } from '@angular/core/testing';

import { ProdottoService } from './prodotto.service';

describe('ProdottoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdottoService]
    });
  });

  it('should be created', inject([ProdottoService], (service: ProdottoService) => {
    expect(service).toBeTruthy();
  }));
});
