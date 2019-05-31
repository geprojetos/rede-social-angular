import { TimelineLikeModule } from './timeline-like.module';

describe('TimelineLikeModule', () => {
  let timelineLikeModule: TimelineLikeModule;

  beforeEach(() => {
    timelineLikeModule = new TimelineLikeModule();
  });

  it('should create an instance', () => {
    expect(timelineLikeModule).toBeTruthy();
  });
});
