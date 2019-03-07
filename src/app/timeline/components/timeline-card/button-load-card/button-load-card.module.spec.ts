import { ButtonLoadCardModule } from './button-load-card.module';

describe('ButtonLoadCardModule', () => {
  let buttonLoadCardModule: ButtonLoadCardModule;

  beforeEach(() => {
    buttonLoadCardModule = new ButtonLoadCardModule();
  });

  it('should create an instance', () => {
    expect(buttonLoadCardModule).toBeTruthy();
  });
});
