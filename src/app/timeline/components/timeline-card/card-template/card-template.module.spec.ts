import { CardTemplateModule } from './card-template.module';

describe('CardTemplateModule', () => {
  let cardTemplateModule: CardTemplateModule;

  beforeEach(() => {
    cardTemplateModule = new CardTemplateModule();
  });

  it('should create an instance', () => {
    expect(cardTemplateModule).toBeTruthy();
  });
});
