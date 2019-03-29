import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineAddCardPageComponent } from './timeline-add-card-page.component';
import { TimelineAddCardPageRoutingModule } from './timeline-add-card-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineAddCardPageRoutingModule
  ],
  declarations: [
    TimelineAddCardPageComponent
  ],
  exports: [
    TimelineAddCardPageComponent
  ]
})
export class TimelineAddCardPageModule { }
