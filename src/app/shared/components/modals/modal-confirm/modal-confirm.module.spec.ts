import { ModalConfirmModule } from './modal-confirm.module';

describe('ModalConfirmModule', () => {
  let modalConfirmModule: ModalConfirmModule;

  beforeEach(() => {
    modalConfirmModule = new ModalConfirmModule();
  });

  it('should create an instance', () => {
    expect(modalConfirmModule).toBeTruthy();
  });
});
