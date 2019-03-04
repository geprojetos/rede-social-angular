import { TimelineCardModule } from './timeline-card.module';

describe('TimelineCardModule', () => {
  let timelineCardModule: TimelineCardModule;

  beforeEach(() => {
    timelineCardModule = new TimelineCardModule();
  });

  it('should create an instance', () => {
    expect(timelineCardModule).toBeTruthy();
  });
});
