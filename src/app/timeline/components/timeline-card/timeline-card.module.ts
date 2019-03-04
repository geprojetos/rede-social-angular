import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineCardComponent } from './timeline-card.component';
import { CardTemplateModule } from './card-template/card-template.module';

@NgModule({
  imports: [
    CommonModule,
    CardTemplateModule
  ],
  declarations: [
    TimelineCardComponent
  ],
  exports: [
    TimelineCardComponent
  ]
})
export class TimelineCardModule { }
