import { TimelineUserInfoModule } from './timeline-user-info.module';

describe('TimelineUserInfoModule', () => {
  let timelineUserInfoModule: TimelineUserInfoModule;

  beforeEach(() => {
    timelineUserInfoModule = new TimelineUserInfoModule();
  });

  it('should create an instance', () => {
    expect(timelineUserInfoModule).toBeTruthy();
  });
});
