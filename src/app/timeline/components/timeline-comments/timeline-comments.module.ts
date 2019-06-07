import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCommentsComponent } from './timeline-comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineCommentsComponent
  ],
  exports: [
    TimelineCommentsComponent
  ]
})
export class TimelineCommentsModule { }
