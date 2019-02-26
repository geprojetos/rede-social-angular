import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineUserPageComponent } from './timeline-user-page.component';
import { TimelineUserPageRoutingModule } from './timeline-user-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineUserPageRoutingModule
  ],
  declarations: [
    TimelineUserPageComponent
  ],
  exports: [
    TimelineUserPageComponent
  ]
})
export class TimelineUserPageModule { }
