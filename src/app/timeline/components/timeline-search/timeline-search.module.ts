import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineSearchComponent } from './timeline-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineSearchComponent
  ],
  exports: [
    TimelineSearchComponent
  ]
})
export class TimelineSearchModule { }
