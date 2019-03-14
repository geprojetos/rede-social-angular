import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineSearchComponent } from './timeline-search.component';
import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineSearchComponent
  ],
  exports: [
    TimelineSearchComponent
  ],
  providers: [
    TimelineSearchService
  ]
})
export class TimelineSearchModule { }
