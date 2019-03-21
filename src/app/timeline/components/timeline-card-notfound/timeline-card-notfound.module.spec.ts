import { TimelineCardNotfoundModule } from './timeline-card-notfound.module';

describe('TimelineCardNotfoundModule', () => {
  let timelineCardNotfoundModule: TimelineCardNotfoundModule;

  beforeEach(() => {
    timelineCardNotfoundModule = new TimelineCardNotfoundModule();
  });

  it('should create an instance', () => {
    expect(timelineCardNotfoundModule).toBeTruthy();
  });
});
