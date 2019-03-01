import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineUserInfoComponent } from './timeline-user-info.component';
import { UserInfoDetailsModule } from './user-info-details/user-info-details.module';
import { TimelineUserInfoGuard } from '../../guards/timeline-user-info.guard';

@NgModule({
  imports: [
    CommonModule,
    UserInfoDetailsModule
  ],
  declarations: [
    TimelineUserInfoComponent
  ],
  exports: [
    TimelineUserInfoComponent
  ],
  providers: [
    TimelineUserInfoGuard
  ]
})
export class TimelineUserInfoModule { }
