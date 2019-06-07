import { TimelineCommentsModule } from './timeline-comments.module';

describe('TimelineCommentsModule', () => {
  let timelineCommentsModule: TimelineCommentsModule;

  beforeEach(() => {
    timelineCommentsModule = new TimelineCommentsModule();
  });

  it('should create an instance', () => {
    expect(timelineCommentsModule).toBeTruthy();
  });
});
