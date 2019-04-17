import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineCardNotfoundComponent } from './timeline-card-notfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TimelineCardNotfoundComponent
  ],
  exports: [
    TimelineCardNotfoundComponent
  ]
})
export class TimelineCardNotfoundModule { }
