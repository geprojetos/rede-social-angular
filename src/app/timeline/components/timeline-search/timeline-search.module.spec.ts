import { TimelineSearchModule } from './timeline-search.module';

describe('TimelineSearchModule', () => {
  let timelineSearchModule: TimelineSearchModule;

  beforeEach(() => {
    timelineSearchModule = new TimelineSearchModule();
  });

  it('should create an instance', () => {
    expect(timelineSearchModule).toBeTruthy();
  });
});
