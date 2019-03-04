import { TestBed, inject } from '@angular/core/testing';

import { TimelineCardService } from './timeline-card.service';

describe('TimelineCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineCardService]
    });
  });

  it('should be created', inject([TimelineCardService], (service: TimelineCardService) => {
    expect(service).toBeTruthy();
  }));
});
