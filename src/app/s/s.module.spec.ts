import { SModule } from './s.module';

describe('SModule', () => {
  let sModule: SModule;

  beforeEach(() => {
    sModule = new SModule();
  });

  it('should create an instance', () => {
    expect(sModule).toBeTruthy();
  });
});
