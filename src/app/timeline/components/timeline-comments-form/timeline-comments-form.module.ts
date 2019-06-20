import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineCommentsFormComponent } from './timeline-comments-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TimelineCommentsFormComponent
  ],
  exports: [
    TimelineCommentsFormComponent
  ]
})
export class TimelineCommentsFormModule { }
