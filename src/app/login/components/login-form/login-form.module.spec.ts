import { LoginFormModule } from './login-form.module';

describe('LoginFormModule', () => {
  let loginFormModule: LoginFormModule;

  beforeEach(() => {
    loginFormModule = new LoginFormModule();
  });

  it('should create an instance', () => {
    expect(loginFormModule).toBeTruthy();
  });
});
