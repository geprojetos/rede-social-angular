import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TimelineCardComponent } from './timeline-card.component';
import { CardTemplateModule } from './card-template/card-template.module';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';
import { TimelineCardResolve } from '../../resolvers/timeline-card/timeline-card.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardTemplateModule
  ],
  declarations: [
    TimelineCardComponent
  ],
  exports: [
    TimelineCardComponent
  ],
  providers: [
    TimelineCardService,
    TimelineCardResolve
  ]
})
export class TimelineCardModule { }
