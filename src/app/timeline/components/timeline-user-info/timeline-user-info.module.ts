import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineUserInfoComponent } from './timeline-user-info.component';
import { UserInfoDetailsModule } from './user-info-details/user-info-details.module';

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
  ]
})
export class TimelineUserInfoModule { }
