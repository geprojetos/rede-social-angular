import { TimelineUserPageModule } from './timeline-user-page.module';

describe('TimelineUserPageModule', () => {
  let timelineUserPageModule: TimelineUserPageModule;

  beforeEach(() => {
    timelineUserPageModule = new TimelineUserPageModule();
  });

  it('should create an instance', () => {
    expect(timelineUserPageModule).toBeTruthy();
  });
});
