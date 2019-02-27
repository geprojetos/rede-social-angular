import { UserInfoDetailsModule } from './user-info-details.module';

describe('UserInfoDetailsModule', () => {
  let userInfoDetailsModule: UserInfoDetailsModule;

  beforeEach(() => {
    userInfoDetailsModule = new UserInfoDetailsModule();
  });

  it('should create an instance', () => {
    expect(userInfoDetailsModule).toBeTruthy();
  });
});
