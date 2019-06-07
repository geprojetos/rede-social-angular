import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineCommentsFormComponent } from './timeline-comments-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineCommentsFormComponent
  ],
  exports: [
    TimelineCommentsFormComponent
  ]
})
export class TimelineCommentsFormModule { }
