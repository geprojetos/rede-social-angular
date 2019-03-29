import { TimelineAddCardPageModule } from './timeline-add-card-page.module';

describe('TimelineAddCardPageModule', () => {
  let timelineAddCardPageModule: TimelineAddCardPageModule;

  beforeEach(() => {
    timelineAddCardPageModule = new TimelineAddCardPageModule();
  });

  it('should create an instance', () => {
    expect(timelineAddCardPageModule).toBeTruthy();
  });
});
