import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineBasePageComponent } from './timeline-base-page.component';
import { TimelineBasePageRoutingModule } from './timeline-base-page.routing.module';
import { TimelineMenuModule } from '../../components/timeline-menu/timeline-menu.module';
import { TimelineCardModule } from '../../components/timeline-card/timeline-card.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TimelineMenuModule,
    TimelineCardModule,
    TimelineBasePageRoutingModule
  ],
  declarations: [
    TimelineBasePageComponent
  ],
  exports: [
    TimelineBasePageComponent
  ]
})
export class TimelineBasePageModule { }
