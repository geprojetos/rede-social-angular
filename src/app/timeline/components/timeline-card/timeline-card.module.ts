import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TimelineCardComponent } from './timeline-card.component';
import { CardTemplateModule } from './card-template/card-template.module';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';
import { TimelineCardResolve } from '../../resolvers/timeline-card/timeline-card.resolver';
import { ButtonLoadCardModule } from './button-load-card/button-load-card.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardTemplateModule,
    ButtonLoadCardModule
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
