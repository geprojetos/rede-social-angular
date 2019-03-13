import { TestBed, inject } from '@angular/core/testing';

import { TimelineSearchService } from './timeline-search.service';

describe('TimelineSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineSearchService]
    });
  });

  it('should be created', inject([TimelineSearchService], (service: TimelineSearchService) => {
    expect(service).toBeTruthy();
  }));
});
