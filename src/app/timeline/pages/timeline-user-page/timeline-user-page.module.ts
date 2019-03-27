import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineUserPageComponent } from './timeline-user-page.component';
import { TimelineUserPageRoutingModule } from './timeline-user-page.routing.module';
import { TimelineUserInfoModule } from '../../components/timeline-user-info/timeline-user-info.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineUserInfoModule,
    // TimelineUserPageRoutingModule
  ],
  declarations: [
    TimelineUserPageComponent
  ],
  exports: [
    TimelineUserPageComponent
  ]
})
export class TimelineUserPageModule { }
