import { TimelineBasePageModule } from './timeline-base-page.module';

describe('TimelineBasePageModule', () => {
  let timelineBasePageModule: TimelineBasePageModule;

  beforeEach(() => {
    timelineBasePageModule = new TimelineBasePageModule();
  });

  it('should create an instance', () => {
    expect(timelineBasePageModule).toBeTruthy();
  });
});
