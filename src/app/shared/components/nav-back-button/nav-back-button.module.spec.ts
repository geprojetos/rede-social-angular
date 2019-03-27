import { NavBackButtonModule } from './nav-back-button.module';

describe('NavBackButtonModule', () => {
  let navBackButtonModule: NavBackButtonModule;

  beforeEach(() => {
    navBackButtonModule = new NavBackButtonModule();
  });

  it('should create an instance', () => {
    expect(navBackButtonModule).toBeTruthy();
  });
});
