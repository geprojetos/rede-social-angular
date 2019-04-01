import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TimelineAddCardPageComponent } from './timeline-add-card-page.component';
import { TimelineAddCardPageRoutingModule } from './timeline-add-card-page.routing.module';
import { NavBackButtonModule } from 'src/app/shared/components/nav-back-button/nav-back-button.module';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavBackButtonModule,
    TimelineAddCardPageRoutingModule
  ],
  declarations: [
    TimelineAddCardPageComponent
  ],
  exports: [
    TimelineAddCardPageComponent
  ],
  providers: [
    TimelineCardService
  ]
})
export class TimelineAddCardPageModule { }
