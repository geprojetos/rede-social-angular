import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelinePageComponent } from './timeline-page.component';
import { TimelineMenuModule } from '../../components/timeline-menu/timeline-menu.module';
import { TimelinePageRoutingModule } from './timeline-page.routing.module';
import { TimelineCardModule } from '../../components/timeline-card/timeline-card.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineMenuModule,
    TimelineCardModule,
    TimelinePageRoutingModule
  ],
  declarations: [
    TimelinePageComponent
  ],
  exports: [
    TimelinePageComponent
  ]
})
export class TimelinePageModule { }
