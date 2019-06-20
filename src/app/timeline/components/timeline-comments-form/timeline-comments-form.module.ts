import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineCommentsFormComponent } from './timeline-comments-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    TimelineCommentsFormComponent
  ],
  exports: [
    TimelineCommentsFormComponent
  ]
})
export class TimelineCommentsFormModule { }
