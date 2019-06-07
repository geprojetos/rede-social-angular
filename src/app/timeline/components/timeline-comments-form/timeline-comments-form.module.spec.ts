import { TimelineCommentsFormModule } from './timeline-comments-form.module';

describe('TimelineCommentsFormModule', () => {
  let timelineCommentsFormModule: TimelineCommentsFormModule;

  beforeEach(() => {
    timelineCommentsFormModule = new TimelineCommentsFormModule();
  });

  it('should create an instance', () => {
    expect(timelineCommentsFormModule).toBeTruthy();
  });
});
