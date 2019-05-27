import { TestBed, inject } from '@angular/core/testing';

import { ModalConfirmService } from './modal-confirm.service';

describe('ModalConfirmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalConfirmService]
    });
  });

  it('should be created', inject([ModalConfirmService], (service: ModalConfirmService) => {
    expect(service).toBeTruthy();
  }));
});
