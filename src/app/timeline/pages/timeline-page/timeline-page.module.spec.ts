import { TimelinePageModule } from './timeline-page.module';

describe('TimelinePageModule', () => {
  let timelinePageModule: TimelinePageModule;

  beforeEach(() => {
    timelinePageModule = new TimelinePageModule();
  });

  it('should create an instance', () => {
    expect(timelinePageModule).toBeTruthy();
  });
});
