import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelinePageModule } from './pages/timeline-page/timeline-page.module';
import { TimelineRoutingModule } from './timeline-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineRoutingModule,
    TimelinePageModule
  ],
  declarations: []
})
export class TimelineModule { }
