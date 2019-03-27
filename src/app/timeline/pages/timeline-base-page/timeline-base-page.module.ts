import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineBasePageComponent } from './timeline-base-page.component';
import { TimelineBasePageRoutingModule } from './timeline-base-page.routing.module';
import { TimelineMenuModule } from '../../components/timeline-menu/timeline-menu.module';
import { RouterModule } from '@angular/router';
import { TimelineCardModule } from '../../components/timeline-card/timeline-card.module';
import { TimelineUserInfoModule } from '../../components/timeline-user-info/timeline-user-info.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TimelineMenuModule,
    TimelineCardModule,
    TimelineUserInfoModule,
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
