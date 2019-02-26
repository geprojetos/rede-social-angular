import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineMenuComponent } from './timeline-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineMenuComponent
  ],
  exports: [
    TimelineMenuComponent
  ]
})
export class TimelineMenuModule { }
