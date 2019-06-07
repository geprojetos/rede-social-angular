import { LoggedModule } from './logged.module';

describe('LoggedModule', () => {
  let loggedModule: LoggedModule;

  beforeEach(() => {
    loggedModule = new LoggedModule();
  });

  it('should create an instance', () => {
    expect(loggedModule).toBeTruthy();
  });
});
