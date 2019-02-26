import { TimelineMenuModule } from './timeline-menu.module';

describe('TimelineMenuModule', () => {
  let timelineMenuModule: TimelineMenuModule;

  beforeEach(() => {
    timelineMenuModule = new TimelineMenuModule();
  });

  it('should create an instance', () => {
    expect(timelineMenuModule).toBeTruthy();
  });
});
