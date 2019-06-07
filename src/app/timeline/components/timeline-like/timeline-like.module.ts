import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineLikeComponent } from './timeline-like.component';
import { LoggedModule } from 'src/app/shared/directives/logged/logged.module';

@NgModule({
  imports: [
    CommonModule,
    LoggedModule
  ],
  declarations: [
    TimelineLikeComponent
  ],
  exports:[
    TimelineLikeComponent
  ]
})
export class TimelineLikeModule { }
